import { useCallback, useContext } from "react";
import { useHistory, Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/styles";

import PageLayout from "../components/PageLayout";
import LoginForm from "../components/LoginForm";

import { UserContext } from "../context";

const useClasses = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
  },
}));

function LoginPage() {
  const classes = useClasses();
  const history = useHistory();
  const { isAuthorized, login } = useContext(UserContext);

  const loginUser = useCallback(
    async (payload) => {
      await login(payload);
      history.replace("/");
    },
    [login, history]
  );

  if (isAuthorized) {
    return <Redirect to="/" />;
  }

  return (
    <PageLayout title="Login" containerProps={{ maxWidth: "xs" }}>
      <div className={classes.container}>
        <LoginForm onSubmit={loginUser} />
      </div>
    </PageLayout>
  );
}

export default LoginPage;
