import { Form1 } from "../types/Form1.js";
import { createApi } from "./createApi.js";

export const FormApi = createApi<Form1>("Form", {
  id: undefined,
  createdAt: undefined,
  createdBy: undefined,
  name: undefined,
  type: undefined,
  schema: undefined,
});
