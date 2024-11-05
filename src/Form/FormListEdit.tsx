// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { UnstyledList, viewStyles } from "@dwidge/components-rnw";
import { useNavAction2 } from "@dwidge/hooks-expo";
import assert from "assert";
import { useState } from "react";
import { FormApi } from "../hooks/FormApi";
import { useNavRoutes } from "../hooks/FormsContext";
import { FormCard } from "./FormEdit";

export const FormListEdit = ({
  elements = FormApi.useGetList(),
  selection: [selection, setSelection] = useState<string[]>([]),
  onPress = useNavAction2(
    useNavRoutes().FORM_EDIT_SCREEN,
    async (id: string) => ({
      FormId: id,
    }),
  ),
}) => (
  <UnstyledList
    items={elements}
    keyExtractor={(item) => (assert(item.id), item.id)}
    selection={[selection, setSelection]}
    render={(item) => <FormCard form={item} />}
    selectStyle={viewStyles.select}
    style={viewStyles.unselect}
    onPress={onPress}
  />
);
