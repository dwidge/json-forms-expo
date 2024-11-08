// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { FileApi } from "../hooks/FileApi";
import { FileAttachmentApi } from "../hooks/FileAttachmentApi";

export const useFileAttachmentUrl = (
  attachmentId?: string,
): string | null | undefined => useFileAttachmentUrlInternal(attachmentId);
const useFileAttachmentUrlInternal = (
  attachmentId?: string,
  attachment = FileAttachmentApi.useGetItem(attachmentId),
  file = FileApi.useGetItem(attachment?.FileId),
) => file?.getUrl;
