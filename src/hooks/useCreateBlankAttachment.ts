import assert from "assert";
import { useParams } from "./useParams";
import { FileApi } from "./FileApi";
import { FileAttachmentApi } from "./FileAttachmentApi";

export const useCreateBlankAttachment = ({
  createAttachmentList = FileAttachmentApi.useCreateList(),
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
