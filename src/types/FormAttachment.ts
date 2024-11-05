export type FormAttachment1 = {
  id: string;
  created: boolean;
  createdAt: number;
  createdBy: number | null;
  FormId: string | null;
  data: string | null;
};

export type FormAttachment1Get = Partial<FormAttachment1>;

export type FormAttachment1Set = Omit<
  FormAttachment1Get,
  "createdAt" | "createdBy"
>;

export type FormAttachment1Key = Pick<FormAttachment1Get, "id">;

export type FormAttachment1Filter = FormAttachment1Get;
