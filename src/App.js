import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Routes from "./Routes";
import CssBaseline from "@material-ui/core/CssBaseline";
import { UserContext } from "./context";
import useAuthorization from "./hooks/useAuthorization";

function App() {
  const user = useAuthorization();
  return (
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={user}>
        <CssBaseline />
        <Routes />
      </UserContext.Provider>
    </ThemeProvider>
  );
}

export default App;
