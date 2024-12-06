import styles from "./Stack.module.scss";
import StackSideBar from "./StackSideBar";
import StacksItems from "./StacksItems";
const Stacks = () => {
  return (
    <div className={styles.stacks}>
      <StackSideBar />
      <StacksItems />
    </div>
  );
};

export default Stacks;
