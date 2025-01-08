import { File1 } from "../types/File1.js";
import { createApi } from "./createApi.js";

export const AttachmentApi = createApi<File1>("Attachment", {
  id: undefined,
  createdAt: undefined,
  createdBy: undefined,
  FileId: undefined,
  SchemaId: undefined,
  FormId: undefined,
});
