// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { StyledHeader } from "@dwidge/components-expo";
import {
  CenterView,
  IconButton,
  ScreenView,
  ScrollView,
  StyledFontAwesome,
} from "@dwidge/components-rnw";
import { useNavAction2 } from "@dwidge/hooks-expo";
import { useMemoState } from "@dwidge/hooks-react";
import { TouchableOpacity } from "react-native";
import { FormApi } from "../hooks/FormApi";
import { useNavRoutes } from "../hooks/FormsContext";
import { FormListEdit } from "./FormListEdit";

export const FormListScreen = ({
  createForm = useNavAction2(
    useNavRoutes().SCHEMA_SELECT_SCREEN,
    async () => ({}),
  ),
  editForm = useNavAction2(
    useNavRoutes().FORM_EDIT_SCREEN,
    async (key: string) => ({
      FormId: key,
    }),
  ),
  deleteFormList = FormApi.useDeleteList(),
  selection = useMemoState<string[]>([]),
}) => (
  <ScreenView>
    <StyledHeader
      title="Manage Forms"
      actions={[
        <IconButton
          name="remove-circle"
          onPress={
            deleteFormList && selection[0].length
              ? () => deleteFormList(selection[0].map((id) => ({ id })))
              : undefined
          }
        />,
        <IconButton name="add-circle" onPress={createForm} />,
      ]}
    />
    <ScrollView gap>
      <FormListEdit selection={selection} onPress={editForm} />
      <TouchableOpacity style={{ flex: 1 }} onPress={createForm}>
        <CenterView row gap>
          <StyledFontAwesome name="plus" size={30} />
        </CenterView>
      </TouchableOpacity>
    </ScrollView>
  </ScreenView>
);
