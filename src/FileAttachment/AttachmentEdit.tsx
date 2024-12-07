// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { FileEdit } from "@dwidge/components-expo";
import { FileApi } from "../hooks/FileApi";
import { FileAttachmentApi } from "../hooks/FileAttachmentApi";
import { useParams } from "../hooks/useParams";
import { useIdFilter } from "../hooks/useIdFilter";

export const AttachmentEdit = ({
  id = useParams().AttachmentId,
  attachment: [attachment] = FileAttachmentApi.useItem(useIdFilter(id)),
  file: [file, setFile] = FileApi.useItem(useIdFilter(attachment?.FileId)),
}) => <FileEdit file={[file, setFile]} />;
