export type File2 = {
  id: string;
  created: boolean;
  createdAt: number;
  createdBy: number | null;
  size: number | null;
  mime: string | null;
  sha256: string | null;
  getUrl: string | null;
  putUrl: string | null;
};

export type File2Get = Partial<File2>;

export type File2Set = Omit<File2Get, "createdAt" | "createdBy">;

export type File2Key = Pick<File2Get, "id">;

export type File2Filter = File2Get;
