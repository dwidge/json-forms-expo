// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { StyledHeader } from "@dwidge/components-expo";
import {
  CenterView,
  ScreenView,
  ScrollView,
  StyledText,
} from "@dwidge/components-rnw";
import { JSONSchemaForm } from "@dwidge/json-schema-form-rnw";
import * as Ajv from "ajv";
import { useState } from "react";
import { z } from "zod";

const useFormId = () => "123";
const useForm = (id?: string) =>
  useState<Form | null | undefined>({
    title: "untitled",
    fields: [],
  });

type FieldType = "string" | "number" | "boolean";

type Form = {
  title: string;
  fields: {
    type: FieldType;
    title: string;
    required: boolean;
  }[];
};

const formSchema: Ajv.JSONSchemaType<Form> = {
  type: "object",
  properties: {
    title: {
      type: "string",
      title: "Name",
    },
    fields: {
      type: "array",
      title: "Fields",
      items: {
        type: "object",
        properties: {
          title: {
            type: "string",
            title: "Name",
          },
          type: {
            type: "string",
            enum: ["string", "number", "boolean"],
            title: "Type",
          },
          required: {
            type: "boolean",
            title: "Required",
          },
        },
        required: ["title", "type", "required"],
      },
    },
  },
  required: ["title", "fields"],
};

const JsonFormSchema = z.object({
  jsonSchema: z.string(),
  uiSchema: z.string(),
});

const Form = z.object({
  id: z.string(),
  schema: JsonFormSchema,
});

export const EditSchemaScreen = ({
  form: [form, setForm] = useForm(useFormId()),
}) => (
  <ScreenView>
    <StyledHeader title="Edit Schema" />
    {form == null || !form ? (
      <CenterView>
        <StyledText>
          {form === null ? "The form schema does not exist." : "Loading..."}
        </StyledText>
      </CenterView>
    ) : (
      <ScrollView flex gap wide pad selfcenter>
        <JSONSchemaForm
          name="Schema"
          schema={formSchema}
          value={form}
          onChange={setForm}
        />
      </ScrollView>
    )}
  </ScreenView>
);
