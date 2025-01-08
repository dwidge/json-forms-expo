import { Schema1 } from "../types/Schema1.js";
import { createApi } from "./createApi.js";

export const SchemaApi = createApi<Schema1>("Schema", {
  id: undefined,
  createdAt: undefined,
  createdBy: undefined,
  name: undefined,
  type: undefined,
  schema: undefined,
});
