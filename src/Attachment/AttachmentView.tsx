// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { useIdStringParam } from "@dwidge/hooks-expo";
import { FileView } from "@dwidge/components-expo";
import { AttachmentApi } from "../hooks/AttachmentApi";
import { FileApi } from "../hooks/FileApi";
import { filterId } from "../hooks/useIdFilter";

export const AttachmentView = ({
  id = useIdStringParam(),
  attachment: [attachment] = AttachmentApi.useItem(filterId(id)),
  file: [file, setFile] = FileApi.useItem(filterId(attachment?.FileId)),
}) => <FileView file={[file, setFile]} />;
