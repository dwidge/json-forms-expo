export type Schema1 = {
  id: string;
  created: boolean;
  createdAt: number;
  createdBy: number | null;
  name: string | null;
  type: string | null;
  schema: string | null;
};

export type Schema1Get = Partial<Schema1>;

export type Schema1Set = Omit<Schema1Get, "createdAt" | "createdBy">;

export type Schema1Key = Pick<Schema1Get, "id">;

export type Schema1Filter = Schema1Get;
