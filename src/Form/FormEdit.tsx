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
import { AttachmentListEdit } from "../Attachment/AttachmentListEdit";
import { filterId } from "../hooks";
import { FormApi } from "../hooks/FormApi";
import { FormsContext } from "../hooks/FormsContext";
import { SchemaApi } from "../hooks/SchemaApi";
import { useParams } from "../hooks/useParams";

export const FormEdit = ({
  id = useParams().FormId,
  form: [form, setForm] = FormApi.useItem(filterId(id)),
  schema = SchemaApi.useGetItem(filterId(form?.SchemaId)),
  onEditSchema = useNavAction2(
    useContext(FormsContext).routes.SCHEMA_EDIT_SCREEN,
    async (SchemaId: string) => ({
      SchemaId,
    }),
  ),
  onSaveForm = useNavAction2(
    useContext(FormsContext).routes.FORM_LIST_SCREEN,
    async () => ({}),
  ),
}) =>
  form === undefined || schema === undefined ? (
    <StyledLoader />
  ) : form === null || schema === null ? (
    <StyledText>No form</StyledText>
  ) : schema.schema ? (
    <>
      <FormSubmit
        dataString={[
          form.data ?? defaultJsonFormDataString,
          setForm &&
            ((data) =>
              setForm((prev) => ({
                ...prev,
                data:
                  typeof data === "function"
                    ? data(prev?.data ?? defaultJsonFormDataString)
                    : data,
              }))),
        ]}
        schemaString={[schema.schema ?? defaultFormSchemaString]}
      />
      <AttachmentListEdit ids={{ FormId: form.id }} />
      <StyledButton onPress={onSaveForm}>Save</StyledButton>
    </>
  ) : (
    <>
      <StyledText>This form design has not been created yet.</StyledText>
      {onEditSchema && (
        <StyledButton onPress={() => onEditSchema(schema.id!)}>
          Edit Form Design
        </StyledButton>
      )}
    </>
  );
