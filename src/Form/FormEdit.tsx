// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { StyledLoader, StyledText, StyledView } from "@dwidge/components-rnw";
import { FormApi } from "../hooks/FormApi";

export const FormCard = ({ form = FormApi.useGetItem() }) =>
  form ? (
    <StyledView flex card row>
      <StyledText>{form.name ?? "untitled"}</StyledText>
    </StyledView>
  ) : (
    <StyledLoader />
  );
