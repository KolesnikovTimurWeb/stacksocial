import container from "../Layout/Layout.module.scss";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { User } from "lucide-react";
import Button from "../Button/Button";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={container.container}>
        <Link to={"/"} className={styles.header_logo}>
          <img src={logo} alt="logo" />
          <span>StackSocial</span>
        </Link>

        <div className={styles.header_main}>
          <div className={styles.header_registration}>
            <Button variant="primaryOut">Sign In</Button>
            <Button>Sign Up</Button>
          </div>
          <div>
            <User />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
