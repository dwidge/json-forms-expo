import { AsyncState } from "@dwidge/hooks-react";
import { createContext, useContext } from "react";

export type ApiItem = Record<string, string | number | boolean | null>;

export const createApi = <T extends ApiItem>(
  name: string,
  defaultFilter: Partial<T> = {},
) => {
  type Get = Partial<T>;
  type Set = Omit<Get, "createdAt" | "createdBy">;
  type Key = Pick<Get, "id">;
  type Filter = Get;

  getList: (filter?: Filter) => Promise<Get[]>;
  setList: (list: Set[]) => Promise<(Key | null)[]>;
  createList: (list: Set[]) => Promise<(Key | null)[]>;
  updateList: (list: Set[]) => Promise<(Key | null)[]>;
  deleteList: (list: Key[]) => Promise<(Key | null)[]>;
  getItem: (item: Filter & Key) => Promise<Get | null>;
  updateItem: (item: Set) => Promise<Key | null>;
  deleteItem: (item: Key) => Promise<Key | null>;

  const message =
    name +
    ": createApiW1: Please wrap App with <Context.Provider value={{}}></Context.Provider>";

  const Context = createContext<{
    useGetList: (filter?: Filter) => undefined | Get[];
    useCreateList: () => ((list: Set[]) => Promise<(Get | null)[]>) | undefined;
    useDeleteList: () => ((list: Key[]) => Promise<(Get | null)[]>) | undefined;
    useGetItem: (filter?: Filter) => undefined | Get | null;
    useItem: (filter?: Filter) => AsyncState<Get | null>;
  }>({
    useGetList: () => (console.warn("useGetList1: " + message), undefined),
    useCreateList: () => (
      console.warn("useCreateList1: " + message), undefined
    ),
    useDeleteList: () => (
      console.warn("useDeleteList1: " + message), undefined
    ),
    useGetItem: () => (console.warn("useGetItem1: " + message), undefined),
    useItem: () => (console.warn("useItem1: " + message), []),
  });

  const useGetList = (filter?: Filter) =>
    useContext(Context).useGetList({ ...defaultFilter, ...filter });
  const useCreateList = () => useContext(Context).useCreateList();
  const useDeleteList = () => useContext(Context).useDeleteList();
  const useGetItem = (filter?: Filter) =>
    useContext(Context).useGetItem(
      filter ? { ...defaultFilter, ...filter } : undefined,
    );
  const useItem = (filter?: Filter) =>
    useContext(Context).useItem(
      filter ? { ...defaultFilter, ...filter } : undefined,
    );

  return {
    Context,
    Provider: Context.Provider,
    useGetList,
    useGetItem,
    useItem,
    useCreateList,
    useDeleteList,
  };
};
