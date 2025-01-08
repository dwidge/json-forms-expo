// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { StyledLoader, StyledText, StyledView } from "@dwidge/components-rnw";
import { SchemaApi } from "../hooks/SchemaApi";

export const SchemaCard = ({ form = SchemaApi.useGetItem() }) =>
  form ? (
    <StyledView flex card row>
      <StyledText>{form.name ?? "untitled"}</StyledText>
    </StyledView>
  ) : (
    <StyledLoader />
  );
