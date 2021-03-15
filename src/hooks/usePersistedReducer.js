import { useRef, useEffect, useCallback, useReducer } from "react";

const createStorage = (provider) => ({
  get(key, initialState) {
    const json = provider.getItem(key);
    console.log(json);
    return json === null
      ? typeof initialState === "function"
        ? initialState()
        : initialState
      : JSON.parse(json);
  },
  set(key, value) {
    provider.setItem(key, JSON.stringify(value));
  },
});

function usePersistedReducer(
  key,
  reducer,
  initialState,
  storage = localStorage
) {
  const storageProvider = useRef(createStorage(storage));

  const [state, dispatch] = useReducer(
    reducer,
    storageProvider.current.get(key, initialState)
  );

  useEffect(() => {
    storageProvider.current.set(key, state);
  }, [key, state]);

  const setStorage = useCallback(
    (storage) => {
      const updatedStorage = createStorage(storage);

      updatedStorage.set(key, state);

      storageProvider.current = updatedStorage;
    },
    [key, state]
  );

  return [state, dispatch, setStorage];
}

export default usePersistedReducer;
