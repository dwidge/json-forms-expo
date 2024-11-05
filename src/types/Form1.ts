export type Form1 = {
  id: string;
  created: boolean;
  createdAt: number;
  createdBy: number | null;
  name: string | null;
  type: string | null;
  schema: string | null;
};

export type Form1Get = Partial<Form1>;

export type Form1Set = Omit<Form1Get, "createdAt" | "createdBy">;

export type Form1Key = Pick<Form1Get, "id">;

export type Form1Filter = Form1Get;
