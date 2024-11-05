// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { Form1Key } from "../types/Form1";
import { FormApi } from "./FormApi";
import { FormAttachmentApi } from "./FormAttachmentApi";
import { useParams } from "./useParams";

export const useCreateBlankFormAttachment = ({
  createFormList = FormApi.useCreateList(),
  createAttachmentList = FormAttachmentApi.useCreateList(),
  AttachmentIds = useParams(),
} = {}) =>
  createFormList && createAttachmentList
    ? async (forms: Form1Key[]) =>
        createAttachmentList(
          forms.map((form) => ({ ...AttachmentIds, FormId: form.id })),
        ).then(([r]) => ({ FormAttachmentId: r?.id }))
    : async () => undefined;
