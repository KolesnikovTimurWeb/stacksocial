import Button from "../../components/Button/Button";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home_heading}>
        <h1>
          welcome to <br /> <span>Stack Social</span>
        </h1>
        <p>
          In this website you can post your stack for other developers. You will
          gain more views and even maybe subs for your Saas. Here we can share
          our experince with others and gain new people
        </p>
        <Button variant="primary" size="large">
          Create first stack
        </Button>
      </div>
      <div className={styles.home_picture}></div>
    </div>
  );
};

export default Home;
