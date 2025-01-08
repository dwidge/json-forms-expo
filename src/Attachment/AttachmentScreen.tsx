// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { StyledHeader } from "@dwidge/components-expo";
import { ScreenView, ScrollView, StyledView } from "@dwidge/components-rnw";
import { useParams } from "../hooks/useParams";
import { AttachmentListEdit } from "./AttachmentListEdit";

export const AttachmentScreen = ({ ids = useParams() }) => (
  <ScreenView>
    <StyledHeader title="Attachments" />
    <ScrollView gap pad>
      <StyledView flex column>
        <StyledView>
          <AttachmentListEdit ids={ids} />
        </StyledView>
      </StyledView>
    </ScrollView>
  </ScreenView>
);
