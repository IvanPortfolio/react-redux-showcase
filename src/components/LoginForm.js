import { useCallback, useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import useFormValueChange from "../hooks/useFromValueChange";

const useClasses = makeStyles((theme) => ({
  submitButton: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function LoginForm({ onSubmit }) {
  const classes = useClasses();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const onEmailChange = useFormValueChange(setEmail);
  const onPasswordChange = useFormValueChange(setPassword);
  const onRememberMeChange = useFormValueChange(setRememberMe, "checked");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      onSubmit({
        email,
        password,
        rememberMe,
      });
    },
    [email, onSubmit, password, rememberMe]
  );

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        required
        fullWidth
        margin="normal"
        name="email"
        label="E-mail"
        type="email"
        value={email}
        onChange={onEmailChange}
      />
      <TextField
        variant="outlined"
        required
        fullWidth
        margin="normal"
        name="password"
        label="Password"
        type="password"
        value={password}
        onChange={onPasswordChange}
      />
      <FormControlLabel
        control={
          <Checkbox
            color="primary"
            checked={rememberMe}
            onChange={onRememberMeChange}
          />
        }
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submitButton}
      >
        Submit
      </Button>
    </form>
  );
}

export default LoginForm;
