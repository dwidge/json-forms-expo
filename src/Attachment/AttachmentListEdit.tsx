// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import {
  StyledButton,
  StyledView,
  UnstyledList,
  viewStyles,
} from "@dwidge/components-rnw";
import assert from "assert";
import { useState } from "react";
import { AttachmentApi } from "../hooks/AttachmentApi";
import { useCreateBlankAttachment } from "../hooks/useCreateBlankAttachment";
import { Params, useParams } from "../hooks/useParams";
import { AttachmentEdit } from "./AttachmentEdit";

export const AttachmentListEdit = ({
  ids = useParams() as Params,
  elements = AttachmentApi.useGetList(ids),
  selection: [selection, setSelection] = useState<string[]>([]),
  onCreateAttachment = useCreateBlankAttachment({ AttachIds: ids }),
  onDeleteAttachmentList = AttachmentApi.useDeleteList(),
}) => (
  <StyledView column>
    <UnstyledList
      items={elements}
      keyExtractor={(item) => (assert(item.id), item.id)}
      selection={[selection, setSelection]}
      render={(item) => <AttachmentEdit id={item.id} />}
      selectStyle={viewStyles.select}
      style={viewStyles.unselect}
    />
    <StyledView row gap center middle>
      <StyledButton icon="add" onPress={onCreateAttachment} />
      <StyledButton
        icon="remove"
        onPress={
          onDeleteAttachmentList &&
          (() => onDeleteAttachmentList(selection.map((id) => ({ id }))))
        }
      />
    </StyledView>
  </StyledView>
);
