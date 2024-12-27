import { FormEvent, useState } from "react";
import Button from "../../components/Button/Button";
import styles from "./Login.module.scss";
import {
  useCheckAuth,
  useLogin,
  useRegistration,
} from "../../hooks/authenticationHooks";
import { useAuth } from "../../components/AuthProvider/AuthProvider";
const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleLogin = async (e: FormEvent) => {
    setError(false);
    e.preventDefault();
    login(email, password).catch(() => setError(true));
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleLogin}>
        <h2>
          Login to <span>Stack Social</span>
        </h2>
        <div className={styles.login_input}>
          <label htmlFor="#email">Email</label>

          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
          {error && (
            <span className={styles.login_input_error}>
              User with this email already exists
            </span>
          )}
        </div>
        <div className={styles.login_input}>
          <label htmlFor="#password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <Button size="large">Sign In</Button>
      </form>
    </div>
  );
};

export default Login;
