// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { StyledButton } from "@dwidge/components-rnw";
import { ReactNode, useState } from "react";
import { FormApi } from "../hooks/FormApi";
import { FormListView } from "./FormListView";

export const FormSelectView = ({
  formList = FormApi.useGetList(),
  selected: [selected, setSelected] = useState<string[]>([]),
  searchValue: [searchValue, setSearchValue] = useState(""),
  createFormList = FormApi.useCreateList(),
}): ReactNode => (
  <>
    <FormListView
      elements={
        searchValue
          ? formList?.filter((form) =>
              form.name?.toLowerCase().includes(searchValue.toLowerCase()),
            )
          : formList
      }
      selection={[selected, setSelected]}
    />
    <StyledButton onPress={createFormList && (() => createFormList([{}]))}>
      Create New Form
    </StyledButton>
  </>
);
