// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { StyledButton, StyledLoader, StyledText } from "@dwidge/components-rnw";
import { useNavAction2 } from "@dwidge/hooks-expo";
import {
  defaultFormSchemaString,
  defaultJsonFormDataString,
  FormSubmit,
} from "@dwidge/json-forms-designer";
import { useContext } from "react";
import { AttachmentListEdit } from "../FileAttachment/AttachmentListEdit";
import { FormApi } from "../hooks/FormApi";
import { FormAttachmentApi } from "../hooks/FormAttachmentApi";
import { FormsContext } from "../hooks/FormsContext";
import { useParams } from "../hooks/useParams";
import { FormAttachment1 } from "../types/FormAttachment";
import { filterId } from "../hooks";

type T = FormAttachment1 | null | undefined;
export const FormAttachmentEdit = ({
  id = useParams().FormAttachmentId,
  formAttachment: [
    formAttachment,
    setFormAttachment,
  ] = FormAttachmentApi.useItem(filterId(id)),
  form = FormApi.useGetItem(filterId(formAttachment?.FormId)),
  onEditForm = useNavAction2(
    useContext(FormsContext).routes.FORM_EDIT_SCREEN,
    async (key: string) => ({
      FormId: key,
    }),
  ),
  onSaveForm = useNavAction2(
    useContext(FormsContext).routes.FORM_ATTACHMENT_LIST_SCREEN,
    async () => ({}),
  ),
}) =>
  formAttachment === undefined || form === undefined ? (
    <StyledLoader />
  ) : formAttachment === null || form === null ? (
    <StyledText>No form</StyledText>
  ) : form.schema ? (
    <>
      <FormSubmit
        dataString={[
          formAttachment.data ?? defaultJsonFormDataString,
          setFormAttachment &&
            ((data) =>
              setFormAttachment((prev) => ({
                ...prev,
                data:
                  typeof data === "function"
                    ? data(prev?.data ?? defaultJsonFormDataString)
                    : data,
              }))),
        ]}
        schemaString={[form.schema ?? defaultFormSchemaString]}
      />
      <AttachmentListEdit ids={{ FormAttachmentId: formAttachment.id }} />
      <StyledButton onPress={onSaveForm}>Save</StyledButton>
    </>
  ) : (
    <>
      <StyledText>This form has not been created yet.</StyledText>
      {onEditForm && (
        <StyledButton onPress={() => onEditForm(form.id!)}>
          Edit Form
        </StyledButton>
      )}
    </>
  );
