// Copyright DWJ 2024.
// Distributed under the Boost Software License, Version 1.0.
// https://www.boost.org/LICENSE_1_0.txt

import { useLocalSearchParams } from "expo-router";
import { createContext, useContext } from "react";
import { z } from "zod";

export const FormsContext = createContext({
  routes: {
    FORM_ATTACHMENT_LIST_SCREEN: "",
    FORM_ATTACHMENT_EDIT_SCREEN: "",
    FORM_EDIT_SCREEN: "",
    FORM_SELECT_SCREEN: "",
  },
  useParams: () =>
    z
      .object({
        FormId: z.coerce.string().nullable(),
        FormAttachmentId: z.coerce.string().nullable(),
        AttachmentId: z.coerce.string().nullable(),
      })
      .partial()
      .parse({
        ...useLocalSearchParams(),
      }) satisfies Record<string, string | number | null>,
});

export const useNavRoutes = () => useContext(FormsContext).routes;