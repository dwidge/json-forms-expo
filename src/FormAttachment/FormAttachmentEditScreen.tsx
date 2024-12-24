// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { StyledHeader } from "@dwidge/components-expo";
import { ScreenView, ScrollView } from "@dwidge/components-rnw";
import { FormApi } from "../hooks/FormApi";
import { FormAttachmentApi } from "../hooks/FormAttachmentApi";
import { FormAttachmentEdit } from "./FormAttachmentEdit";
import { filterId, useParams } from "../hooks";

export const FormAttachmentEditScreen = ({
  formAttachment = FormAttachmentApi.useGetItem(
    filterId(useParams().FormAttachmentId),
  ),
  form = FormApi.useGetItem(filterId(formAttachment?.FormId)),
}) => (
  <ScreenView>
    <StyledHeader title={["Form", form?.name].filter(Boolean).join(" - ")} />
    <ScrollView flex gap pad>
      <FormAttachmentEdit />
    </ScrollView>
  </ScreenView>
);
