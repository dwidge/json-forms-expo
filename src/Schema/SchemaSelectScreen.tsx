// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import React, { useState } from "react";
import {
  ScreenView,
  ScrollView,
  StyledText,
  StyledView,
} from "@dwidge/components-rnw";
import { useNavAction2 } from "@dwidge/hooks-expo";
import { StyledButton } from "@dwidge/components-rnw";
import { SchemaSelectView } from "./SchemaSelectView";
import { useNavRoutes } from "../hooks/FormsContext";
import { StyledHeader } from "@dwidge/components-expo";
import { useCreateBlankForm } from "../hooks";

const useOnSelectSchema = () =>
  useNavAction2(useNavRoutes().FORM_EDIT_SCREEN, useCreateBlankForm({}));

export const SchemaSelectScreen = ({
  onSelectSchema = useOnSelectSchema(),
  selected: [selected, setSelected] = useState<string[]>([]),
}) => (
  <ScreenView>
    <StyledHeader title="Select Schema" />
    <ScrollView gap pad>
      <StyledView>
        <StyledText center>Select one or more</StyledText>
      </StyledView>
      <SchemaSelectView selected={[selected, setSelected]} />
      <StyledButton
        onPress={
          selected.length > 0 && onSelectSchema
            ? () => onSelectSchema(selected.map((id) => ({ id })))
            : undefined
        }
      >
        Select Schema
      </StyledButton>
    </ScrollView>
  </ScreenView>
);
