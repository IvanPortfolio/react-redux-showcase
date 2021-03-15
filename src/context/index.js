import { createContext } from "react";

export const UserContext = createContext({
  isAuthorized: false,
  login: async () => {},
  logout: () => {},
});
