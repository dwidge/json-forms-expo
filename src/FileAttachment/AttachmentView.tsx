// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { useIdStringParam } from "@dwidge/hooks-expo";
import { FileView } from "@dwidge/components-expo";
import { FileAttachmentApi } from "../hooks/FileAttachmentApi";
import { FileApi } from "../hooks/FileApi";
import { useIdFilter } from "../hooks/useIdFilter";

export const AttachmentView = ({
  id = useIdStringParam(),
  attachment: [attachment] = FileAttachmentApi.useItem(useIdFilter(id)),
  file: [file, setFile] = FileApi.useItem(useIdFilter(attachment?.FileId)),
}) => <FileView file={[file, setFile]} />;
