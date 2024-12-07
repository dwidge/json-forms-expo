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
import {
  defaultFormSchemaString,
  FormDesigner,
  FormSchema,
} from "@dwidge/json-forms-designer";
import { FormApi } from "../hooks/FormApi";
import { useParams } from "../hooks/useParams";
import { useIdFilter } from "../hooks";

export const FormEditScreen = ({
  form: [form, setForm] = FormApi.useItem(useIdFilter(useParams().FormId)),
}) => (
  <ScreenView>
    <StyledHeader title={["Form", form?.name].filter(Boolean).join(" - ")} />
    {form == null || !form ? (
      <CenterView>
        <StyledText>
          {form === null ? "The form does not exist." : "Loading..."}
        </StyledText>
      </CenterView>
    ) : (
      <ScrollView flex gap wide pad selfcenter>
        <FormDesigner
          schemaString={[
            form.schema ?? defaultFormSchemaString,
            setForm &&
              ((updater) => {
                const next =
                  typeof updater === "function"
                    ? updater(form.schema ?? defaultFormSchemaString)
                    : updater;
                const parsed = FormSchema.parse(JSON.parse(next));
                setForm?.((prev) => ({
                  ...prev,
                  name: parsed.schema.title,
                  schema: next,
                }));
              }),
          ]}
        />
      </ScrollView>
    )}
  </ScreenView>
);
