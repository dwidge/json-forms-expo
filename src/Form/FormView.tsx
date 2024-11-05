// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { StyledText } from "@dwidge/components-rnw";
import { FormApi } from "../hooks/FormApi";

export const FormView = ({
  form = FormApi.useGetItem(),
  onPress = () => {},
}) => <StyledText>{form?.name || "untitled"}</StyledText>;
