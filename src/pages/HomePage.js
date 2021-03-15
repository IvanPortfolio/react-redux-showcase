import PageLayout from "../components/PageLayout";
import { Typography } from "@material-ui/core";
import { useContext } from "react";
import { UserContext } from "../context";
import { makeStyles } from "@material-ui/styles";

const useClasses = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2),
  },
}));

function HomePage() {
  const classes = useClasses();
  const { user, isAuthorized } = useContext(UserContext);

  return (
    <PageLayout title="Dashboard">
      <Typography variant="h5" className={classes.title}>
        Welcome, {isAuthorized ? user.username : "Guest"}
      </Typography>
    </PageLayout>
  );
}

export default HomePage;
