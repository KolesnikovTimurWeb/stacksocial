import Select from "react-select";
import styles from "./StacksSideBar.module.scss";
import Button from "../../components/Button/Button";
import "./StackSelect.css";
const options = [
  { value: "JavaScript", label: "JavaScript" },
  { value: "Python", label: "Python" },
  { value: "React", label: "React" },
];

const StackSideBar = () => {
  return (
    <form className={styles.stack_sidebar}>
      <div className={styles.stack_sidebar_input}>
        <label htmlFor="title">Title</label>
        <input id="title" placeholder="Search by title" />
      </div>
      <div className={styles.stack_sidebar_option}>
        <label htmlFor="title">Languages</label>
        <Select className="stack-select" isMulti options={options}></Select>
      </div>
      <div className={styles.stack_sidebar_apply}>
        <Button>Apply</Button>
      </div>
    </form>
  );
};

export default StackSideBar;
