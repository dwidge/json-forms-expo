import { useContext } from "react";
import { FormsContext } from "./FormsContext";

export type Params = Record<string, string | number | null | undefined>;
export const useParams = (): Params & {
  AttachmentId?: string | null | undefined;
  FormId?: string | null | undefined;
  FormAttachmentId?: string | null | undefined;
} => useContext(FormsContext).useParams();
