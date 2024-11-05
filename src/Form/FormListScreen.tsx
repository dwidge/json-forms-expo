// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { StyledHeader } from "@dwidge/components-expo";
import {
  CenterView,
  ScreenView,
  ScrollView,
  StyledFontAwesome,
  StyledView,
} from "@dwidge/components-rnw";
import { useMemoState } from "@dwidge/hooks-react";
import { TouchableOpacity } from "react-native";
import { FormApi } from "../hooks/FormApi";
import { FormListEdit } from "./FormListEdit";
import { useCreateBlankForm } from "../hooks/useCreateBlankForm";

export const FormListScreen = ({
  onCreate = useCreateBlankForm(),
  onDeleteList = FormApi.useDeleteList(),
  selection = useMemoState<string[]>([]),
}) => (
  <ScreenView>
    <StyledHeader
      title="Forms"
      actions={[
        {
          icon: "remove-circle",
          onPress:
            onDeleteList && selection[0].length
              ? () => onDeleteList(selection[0].map((id) => ({ id })))
              : undefined,
        },
        {
          icon: "add-circle",
          onPress: onCreate,
        },
      ]}
    />
    <ScrollView gap pad>
      <StyledView flex column>
        <StyledView>
          <FormListEdit selection={selection} />
        </StyledView>
        <TouchableOpacity style={{ flex: 1 }} onPress={onCreate}>
          <CenterView row gap>
            <StyledFontAwesome name="plus" size={30} />
          </CenterView>
        </TouchableOpacity>
      </StyledView>
    </ScrollView>
  </ScreenView>
);
