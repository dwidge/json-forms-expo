// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { StyledDate } from "@dwidge/components-expo";
import { StyledLoader, StyledText, StyledView } from "@dwidge/components-rnw";
import { SchemaApi } from "../hooks/SchemaApi";
import { FormApi } from "../hooks/FormApi";
import { useParams } from "../hooks/useParams";
import { filterId } from "../hooks";

export const FormView = ({
  id = useParams().FormId,
  attachment: [attachment, setAttachment] = FormApi.useItem(filterId(id)),
  form = SchemaApi.useGetItem(filterId(attachment?.SchemaId)),
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
