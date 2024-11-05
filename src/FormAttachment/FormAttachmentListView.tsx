// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { UnstyledList, viewStyles } from "@dwidge/components-rnw";
import { useNavAction2 } from "@dwidge/hooks-expo";
import assert from "assert";
import { FormAttachmentApi } from "../hooks/FormAttachmentApi";
import { useNavRoutes } from "../hooks/FormsContext";
import { FormAttachmentView } from "./FormAttachmentView";

export const FormAttachmentListView = ({
  attachments = FormAttachmentApi.useGetList({}),
  onPressItem = useNavAction2(
    useNavRoutes().FORM_ATTACHMENT_EDIT_SCREEN,
    async (id: string) => ({
      FormAttachmentId: id,
    }),
  ),
}) => (
  <UnstyledList
    items={attachments}
    keyExtractor={(item) => (assert(item.id), item.id)}
    selection={[[], () => {}]}
    render={(item) => <FormAttachmentView id={item.id} />}
    selectStyle={viewStyles.select}
    style={viewStyles.unselect}
    onPress={onPressItem}
  />
);
