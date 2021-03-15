import { useCallback } from "react";
import usePersistedReducer from "./usePersistedReducer";

const ACTIONS = {
  SET_USER: "SET_USER",
};

const login = (user) => {
  return {
    type: ACTIONS.SET_USER,
    payload: user,
  };
};

const logout = () => {
  return {
    type: ACTIONS.SET_USER,
    payload: null,
  };
};

const initialState = {
  user: null,
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

const useAuthorization = () => {
  const [state, dispatch, setStorage] = usePersistedReducer(
    "user",
    reducer,
    initialState
  );
  const isAuthorized = !!state.user;

  const loginUser = useCallback(
    async ({ email, rememberMe }) => {
      // DO some fetch calls

      if (rememberMe) {
        setStorage(localStorage);
      } else {
        setStorage(sessionStorage);
      }

      dispatch(
        login({
          email,
          username: email.split("@")[0],
        })
      );
    },
    [dispatch, setStorage]
  );

  const logoutUser = useCallback(async () => {
    // DO some fetch calls
    dispatch(logout());
  }, [dispatch]);

  return {
    isAuthorized,
    login: loginUser,
    logout: logoutUser,
    user: state.user,
  };
};

export default useAuthorization;
