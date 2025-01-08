import assert from "assert";
import { useParams } from "./useParams";
import { FileApi } from "./FileApi";
import { AttachmentApi } from "./AttachmentApi";

export const useCreateBlankAttachment = ({
  createAttachmentList = AttachmentApi.useCreateList(),
  createFileList = FileApi.useCreateList(),
  AttachIds = useParams(),
} = {}) =>
  createAttachmentList && createFileList
    ? () =>
        createFileList([{}]).then(
          ([file]) => (
            assert(file),
            createAttachmentList([
              {
                FileId: file.id,
                ...AttachIds,
              },
            ]).then(([r]) => r)
          ),
        )
    : undefined;
