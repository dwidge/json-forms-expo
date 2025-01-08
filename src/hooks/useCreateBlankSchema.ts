// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { SchemaApi } from "./SchemaApi";

export const useCreateBlankSchema = ({
  createList = SchemaApi.useCreateList(),
} = {}) =>
  createList
    ? () => createList([{}]).then(([v]) => ({ SchemaId: v?.id }))
    : undefined;
