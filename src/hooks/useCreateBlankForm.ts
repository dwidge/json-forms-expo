// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { FormApi } from "./FormApi";

export const useCreateBlankForm = ({
  createFormList = FormApi.useCreateList(),
} = {}) =>
  createFormList
    ? () => createFormList([{}]).then(([form]) => ({ FormId: form?.id }))
    : () => undefined;
