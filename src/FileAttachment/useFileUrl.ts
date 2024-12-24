// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { FileApi } from "../hooks/FileApi";
import { filterId } from "../hooks/useIdFilter";

export const useFileUrl = (fileId?: string): string | null | undefined =>
  useFileUrlInternal(fileId);
const useFileUrlInternal = (
  fileId?: string,
  file = FileApi.useGetItem(filterId(fileId)),
) => file?.getUrl;
