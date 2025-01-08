// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { StyledHeader } from "@dwidge/components-expo";
import { ScreenView, ScrollView } from "@dwidge/components-rnw";
import { SchemaApi } from "../hooks/SchemaApi";
import { FormApi } from "../hooks/FormApi";
import { FormEdit } from "./FormEdit";
import { filterId, useParams } from "../hooks";

export const FormEditScreen = ({
  form = FormApi.useGetItem(filterId(useParams().FormId)),
  schema = SchemaApi.useGetItem(filterId(form?.SchemaId)),
}) => (
  <ScreenView>
    <StyledHeader title={["Form", schema?.name].filter(Boolean).join(" - ")} />
    <ScrollView flex gap pad>
      <FormEdit />
    </ScrollView>
  </ScreenView>
);
