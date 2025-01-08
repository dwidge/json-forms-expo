// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { UnstyledList, viewStyles } from "@dwidge/components-rnw";
import { useNavAction2 } from "@dwidge/hooks-expo";
import assert from "assert";
import { useState } from "react";
import { SchemaApi } from "../hooks/SchemaApi";
import { useNavRoutes } from "../hooks/FormsContext";
import { SchemaCard } from "./SchemaEdit";

export const SchemaListEdit = ({
  elements = SchemaApi.useGetList(),
  selection: [selection, setSelection] = useState<string[]>([]),
  onPress = useNavAction2(
    useNavRoutes().SCHEMA_EDIT_SCREEN,
    async (id: string) => ({
      SchemaId: id,
    }),
  ),
}) => (
  <UnstyledList
    items={elements}
    keyExtractor={(item) => (assert(item.id), item.id)}
    selection={[selection, setSelection]}
    render={(item) => <SchemaCard form={item} />}
    selectStyle={viewStyles.select}
    style={viewStyles.unselect}
    onPress={onPress}
  />
);
