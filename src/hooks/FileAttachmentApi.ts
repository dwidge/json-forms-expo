import { FileAttachment } from "../types/FileAttachment.js";
import { createApi } from "./createApi.js";

export const FileAttachmentApi = createApi<FileAttachment>("FileAttachment", {
  id: undefined,
  createdAt: undefined,
  createdBy: undefined,
  FileId: undefined,
  FormId: undefined,
  FormAttachmentId: undefined,
});
