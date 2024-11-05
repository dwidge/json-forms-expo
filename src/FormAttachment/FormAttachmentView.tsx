// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { StyledDate } from "@dwidge/components-expo";
import { StyledLoader, StyledText, StyledView } from "@dwidge/components-rnw";
import { FormApi } from "../hooks/FormApi";
import { FormAttachmentApi } from "../hooks/FormAttachmentApi";
import { useParams } from "../hooks/useParams";

export const FormAttachmentView = ({
  id = useParams().FormAttachmentId,
  attachment: [attachment, setAttachment] = FormAttachmentApi.useItem(id),
  form = FormApi.useGetItem(attachment?.FormId),
}) =>
  attachment && form ? (
    <StyledView space outline gap pad flex>
      <StyledText>{form.name || "untitled"}</StyledText>
      {attachment.createdAt && (
        <StyledDate>{attachment.createdAt * 1000}</StyledDate>
      )}
    </StyledView>
  ) : (
    <StyledLoader />
  );
