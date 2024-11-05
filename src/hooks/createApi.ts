import { AsyncState, useAsyncSaveState } from "@dwidge/hooks-react";
import { createContext, useContext } from "react";
import { useParams } from "./useParams";

export type ApiItem = Record<string, string | number | boolean | null>;

export const createApi = <T extends ApiItem>(
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
    "createApiW1: Please wrap App with <Context.Provider value={{}}></Context.Provider>";

  const Context = createContext<{
    useGetList: (filter?: Filter) => undefined | Get[];
    useCreateList: () => ((list: Set[]) => Promise<(Get | null)[]>) | undefined;
    useDeleteList: () => ((list: Key[]) => Promise<(Get | null)[]>) | undefined;
    useGetItem: (key?: Filter & Key) => undefined | Get | null;
    useItem: (key?: Get) => AsyncState<Get | null>;
  }>({
    useGetList: () => (console.warn(message), undefined),
    useCreateList: () => (console.warn(message), undefined),
    useDeleteList: () => (console.warn(message), undefined),
    useGetItem: () => (console.warn(message), undefined),
    useItem: () => (console.warn(message), []),
  });

  const useGetList = (filter: Filter = {}, ids = useParams()) =>
    useContext(Context).useGetList({ ...ids, ...defaultFilter, ...filter });
  const useCreateList = () => useContext(Context).useCreateList();
  const useDeleteList = () => useContext(Context).useDeleteList();
  const useGetItem = (id?: Key["id"] | null, ids = useParams()) =>
    useContext(Context).useGetItem(
      id ? { ...ids, ...defaultFilter, id } : undefined,
    );
  const useItem = (id?: Key["id"] | null, ids = useParams()) =>
    useAsyncSaveState(
      useContext(Context).useItem(
        id ? { ...ids, ...defaultFilter, id } : undefined,
      ),
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
