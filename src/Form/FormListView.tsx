// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { UnstyledList, viewStyles } from "@dwidge/components-rnw";
import { useNavAction2 } from "@dwidge/hooks-expo";
import assert from "assert";
import { FormApi } from "../hooks/FormApi";
import { useNavRoutes } from "../hooks/FormsContext";
import { FormView } from "./FormView";

export const FormListView = ({
  attachments = FormApi.useGetList({}),
  onPressItem = useNavAction2(
    useNavRoutes().FORM_EDIT_SCREEN,
    async (id: string) => ({
      FormId: id,
    }),
  ),
}) => (
  <UnstyledList
    items={attachments}
    keyExtractor={(item) => (assert(item.id), item.id)}
    selection={[[], () => {}]}
    render={(item) => <FormView id={item.id} />}
    selectStyle={viewStyles.select}
    style={viewStyles.unselect}
    onPress={onPressItem}
  />
);
