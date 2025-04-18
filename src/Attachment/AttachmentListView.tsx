// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { AttachmentApi } from "../hooks/AttachmentApi";
import { useParams } from "../hooks/useParams";
import { AttachmentView } from "./AttachmentView";

export const AttachmentListView = ({
  ids = useParams(),
  attachments = AttachmentApi.useGetList(ids),
}) => attachments?.map((a) => <AttachmentView key={a.id} id={a.id} />);
