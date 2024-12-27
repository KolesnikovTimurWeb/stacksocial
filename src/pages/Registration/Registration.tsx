import React, { FormEvent, useState } from "react";
import styles from "./Registration.module.scss";
import { useRegistration } from "../../hooks/authenticationHooks";
import Button from "../../components/Button/Button";
import { useAuth } from "../../components/AuthProvider/AuthProvider";
const Registration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { register } = useAuth();
  const handleRegister = async (e: FormEvent) => {
    setError(false);
    e.preventDefault();
    register(email, password).catch((err) => setError(true));
  };
  return (
    <div>
      <div className={styles.registration}>
        <form onSubmit={handleRegister}>
          <h2>
            Login to <span>Stack Social</span>
          </h2>
          <div className={styles.login_input}>
            <label htmlFor="#username">Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
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
    </div>
  );
};

export default Registration;
