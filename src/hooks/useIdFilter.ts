export const filterId = <T extends string | number>(id?: T | null) =>
  id != null ? { id } : undefined;
