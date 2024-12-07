import { FormAttachment1 } from "../types/FormAttachment.js";
import { createApi } from "./createApi.js";

export const FormAttachmentApi = createApi<FormAttachment1>("FormAttachment", {
  id: undefined,
  createdAt: undefined,
  createdBy: undefined,
  FormId: undefined,
  data: undefined,
});
