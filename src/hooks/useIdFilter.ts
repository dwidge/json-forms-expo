export const useIdFilter = <T extends string | number>(id?: T | null) =>
  id != null ? { id } : undefined;
