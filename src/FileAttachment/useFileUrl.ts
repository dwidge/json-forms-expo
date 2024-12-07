// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { FileApi } from "../hooks/FileApi";
import { useIdFilter } from "../hooks/useIdFilter";

export const useFileUrl = (fileId?: string): string | null | undefined =>
  useFileUrlInternal(fileId);
const useFileUrlInternal = (
  fileId?: string,
  file = FileApi.useGetItem(useIdFilter(fileId)),
) => file?.getUrl;
