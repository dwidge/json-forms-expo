import { File2 } from "../types/File2.js";
import { createApi } from "./createApi.js";

export const FileApi = createApi<File2>("File", {
  id: undefined,
  createdAt: undefined,
  createdBy: undefined,
  size: undefined,
  mime: undefined,
  sha256: undefined,
  putUrl: undefined,
  getUrl: undefined,
});
