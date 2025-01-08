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
import { SchemaApi } from "../hooks/SchemaApi";
import { SchemaListEdit } from "./SchemaListEdit";
import { useCreateBlankSchema } from "../hooks/useCreateBlankSchema";

export const SchemaListScreen = ({
  onCreate = useCreateBlankSchema(),
  onDeleteList = SchemaApi.useDeleteList(),
  selection = useMemoState<string[]>([]),
}) => (
  <ScreenView>
    <StyledHeader
      title="Schemas"
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
          <SchemaListEdit selection={selection} />
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
