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
import { FormSelectView } from "./FormSelectView";
import { useNavRoutes } from "../hooks/FormsContext";
import { StyledHeader } from "@dwidge/components-expo";
import { useCreateBlankFormAttachment } from "../hooks/useCreateBlankFormAttachment";

const useOnSelectForm = () =>
  useNavAction2(
    useNavRoutes().FORM_ATTACHMENT_EDIT_SCREEN,
    useCreateBlankFormAttachment({}),
  );

export const FormSelectScreen = ({
  onSelectForm = useOnSelectForm(),
  selected: [selected, setSelected] = useState<string[]>([]),
}) => (
  <ScreenView>
    <StyledHeader title="Select Form" />
    <ScrollView gap pad>
      <StyledView>
        <StyledText center>
          Select from the list of forms below, or use the search option above.
        </StyledText>
      </StyledView>
      <FormSelectView selected={[selected, setSelected]} />
      <StyledButton
        onPress={
          selected.length > 0 && onSelectForm
            ? () => onSelectForm(selected.map((id) => ({ id })))
            : undefined
        }
      >
        Select Form
      </StyledButton>
    </ScrollView>
  </ScreenView>
);
