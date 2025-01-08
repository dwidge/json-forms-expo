// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { FileEdit } from "@dwidge/components-expo";
import { FileApi } from "../hooks/FileApi";
import { AttachmentApi } from "../hooks/AttachmentApi";
import { useParams } from "../hooks/useParams";
import { filterId } from "../hooks/useIdFilter";

export const AttachmentEdit = ({
  id = useParams().AttachmentId,
  attachment: [attachment] = AttachmentApi.useItem(filterId(id)),
  file: [file, setFile] = FileApi.useItem(filterId(attachment?.FileId)),
}) => <FileEdit file={[file, setFile]} />;
