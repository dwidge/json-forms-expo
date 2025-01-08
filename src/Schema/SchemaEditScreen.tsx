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
import { SchemaApi } from "../hooks/SchemaApi";
import { useParams } from "../hooks/useParams";
import { filterId } from "../hooks";

export const SchemaEditScreen = ({
  schema: [schema, setSchema] = SchemaApi.useItem(
    filterId(useParams().SchemaId),
  ),
}) => (
  <ScreenView>
    <StyledHeader title={["Form", schema?.name].filter(Boolean).join(" - ")} />
    {schema == null || !schema ? (
      <CenterView>
        <StyledText>
          {schema === null ? "The form does not exist." : "Loading..."}
        </StyledText>
      </CenterView>
    ) : (
      <ScrollView flex gap wide pad selfcenter>
        <FormDesigner
          schemaString={[
            schema.schema ?? defaultFormSchemaString,
            setSchema &&
              ((updater) => {
                const next =
                  typeof updater === "function"
                    ? updater(schema.schema ?? defaultFormSchemaString)
                    : updater;
                const parsed = FormSchema.parse(JSON.parse(next));
                setSchema?.((prev) => ({
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
