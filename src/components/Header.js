import { useContext } from "react";
import { Link } from "react-router-dom";

import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputIcon from "@material-ui/icons/Input";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { UserContext } from "../context";

const useClasses = makeStyles((theme) => ({
  title: {
    flex: 1,
  },
}));

function Header({ title }) {
  const classes = useClasses();

  const { isAuthorized, logout } = useContext(UserContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Button
          startIcon={<DashboardIcon />}
          color="inherit"
          component={Link}
          to={"/"}
        >
          Dashboard
        </Button>
        {!isAuthorized ? (
          <Button
            startIcon={<InputIcon />}
            color="inherit"
            component={Link}
            to={"/login"}
          >
            Login
          </Button>
        ) : (
          <Button startIcon={<InputIcon />} color="inherit" onClick={logout}>
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
