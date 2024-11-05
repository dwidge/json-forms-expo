// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { StyledView, UnstyledList, viewStyles } from "@dwidge/components-rnw";
import { useNavAction2 } from "@dwidge/hooks-expo";
import { useMemoState } from "@dwidge/hooks-react";
import assert from "assert";
import { useParams } from "../hooks";
import { FormAttachmentApi } from "../hooks/FormAttachmentApi";
import { useNavRoutes } from "../hooks/FormsContext";
import { FormAttachmentView } from "./FormAttachmentView";

export const FormAttachmentListEdit = ({
  ids = useParams(),
  elements = FormAttachmentApi.useGetList({
    id: undefined,
    data: undefined,
    ...ids,
  }),
  selection: [selection, setSelection] = useMemoState<string[]>([]),
  onPress = useNavAction2(
    useNavRoutes().FORM_ATTACHMENT_EDIT_SCREEN,
    async (id: string) => ({
      FormAttachmentId: id,
    }),
  ),
}) => (
  <StyledView column>
    <UnstyledList
      items={elements}
      keyExtractor={(item) => (assert(item.id), item.id)}
      selection={[selection, setSelection]}
      render={(item) => <FormAttachmentView id={item.id} />}
      selectStyle={viewStyles.select}
      style={viewStyles.unselect}
      onPress={onPress}
    />
  </StyledView>
);
