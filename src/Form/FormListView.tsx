// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { UnstyledList, viewStyles } from "@dwidge/components-rnw";
import assert from "assert";
import { useState } from "react";
import { FormApi } from "../hooks/FormApi";
import { FormView } from "./FormView";

export const FormListView = ({
  elements = FormApi.useGetList(),
  selection: [selection, setSelection] = useState<string[]>([]),
}) => (
  <UnstyledList
    items={elements}
    keyExtractor={(item) => (assert(item.id), item.id)}
    selection={[selection, setSelection]}
    render={(item) => <FormView form={item} />}
    selectStyle={viewStyles.select}
    style={viewStyles.unselect}
  />
);
