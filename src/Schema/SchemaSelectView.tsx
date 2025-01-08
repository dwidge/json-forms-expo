// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { StyledButton } from "@dwidge/components-rnw";
import { ReactNode, useState } from "react";
import { SchemaApi } from "../hooks/SchemaApi";
import { SchemaListView } from "./SchemaListView";

export const SchemaSelectView = ({
  formList = SchemaApi.useGetList(),
  selected: [selected, setSelected] = useState<string[]>([]),
  searchValue: [searchValue, setSearchValue] = useState(""),
  createSchemaList = SchemaApi.useCreateList(),
}): ReactNode => (
  <>
    <SchemaListView
      elements={
        searchValue
          ? formList?.filter((form) =>
              form.name?.toLowerCase().includes(searchValue.toLowerCase()),
            )
          : formList
      }
      selection={[selected, setSelected]}
    />
    <StyledButton onPress={createSchemaList && (() => createSchemaList([{}]))}>
      Create New Schema
    </StyledButton>
  </>
);
