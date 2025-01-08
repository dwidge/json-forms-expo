// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { Schema1Key } from "../types/Schema1";
import { SchemaApi } from "./SchemaApi";
import { FormApi } from "./FormApi";
import { useParams } from "./useParams";

export const useCreateBlankForm = ({
  createSchemaList = SchemaApi.useCreateList(),
  createFormList = FormApi.useCreateList(),
  AttachmentIds = useParams(),
} = {}) =>
  createSchemaList && createFormList
    ? async (forms: Schema1Key[]) =>
        createFormList(
          forms.map((form) => ({ ...AttachmentIds, FormId: form.id })),
        ).then(([r]) => ({ FormId: r?.id }))
    : async () => undefined;
