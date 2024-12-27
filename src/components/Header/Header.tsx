import container from "../Layout/Layout.module.scss";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import Button from "../Button/Button";
import { useAuth } from "../AuthProvider/AuthProvider";
const Header = () => {
  const { token } = useAuth();
  return (
    <div className={styles.header}>
      <div className={container.container}>
        <Link to={"/"} className={styles.header_logo}>
          <img src={logo} alt="logo" />
          <span>StackSocial</span>
        </Link>

        <div className={styles.header_main}>
          {token && (
            <nav className={styles.header_nav}>
              <Link to={"/stacks"}>Stacks</Link>
              <Link to={"/my-collections"}>My collections</Link>
              <Link to={"/create-stack"}>
                <Button>Create Stack</Button>
              </Link>
            </nav>
          )}
          {!token && (
            <div className={styles.header_registration}>
              <Link to={"/login"}>
                <Button variant="primaryOut">Sign In</Button>
              </Link>
              <Link to={"/register"}>
                <Button>Sign Up</Button>
              </Link>
            </div>
          )}
          <div>
            <User />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
