// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { StyledHeader } from "@dwidge/components-expo";
import {
  CenterView,
  ScreenView,
  ScrollView,
  StyledFontAwesome,
} from "@dwidge/components-rnw";
import { useNavAction2 } from "@dwidge/hooks-expo";
import { useMemoState } from "@dwidge/hooks-react";
import { TouchableOpacity } from "react-native";
import { FormAttachmentApi } from "../hooks/FormAttachmentApi";
import { useNavRoutes } from "../hooks/FormsContext";
import { FormAttachmentListEdit } from "./FormAttachmentListEdit";

export const FormAttachmentListScreen = ({
  onCreateAttachment = useNavAction2(
    useNavRoutes().FORM_SELECT_SCREEN,
    async () => ({}),
  ),
  onEditAttachment = useNavAction2(
    useNavRoutes().FORM_ATTACHMENT_EDIT_SCREEN,
    async (key: string) => ({
      FormAttachmentId: key,
    }),
  ),
  onDeleteAttachmentList = FormAttachmentApi.useDeleteList(),
  selection = useMemoState<string[]>([]),
}) => (
  <ScreenView>
    <StyledHeader
      title="Manage Forms"
      actions={[
        {
          icon: "remove-circle",
          onPress:
            onDeleteAttachmentList && selection[0].length
              ? () => onDeleteAttachmentList(selection[0].map((id) => ({ id })))
              : undefined,
        },
        {
          icon: "add-circle",
          onPress: onCreateAttachment,
        },
      ]}
    />
    <ScrollView gap>
      <FormAttachmentListEdit
        selection={selection}
        onPress={onEditAttachment}
      />
      <TouchableOpacity style={{ flex: 1 }} onPress={onCreateAttachment}>
        <CenterView row gap>
          <StyledFontAwesome name="plus" size={30} />
        </CenterView>
      </TouchableOpacity>
    </ScrollView>
  </ScreenView>
);
