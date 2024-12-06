import {
  ArrowLeft,
  ArrowRight,
  Heart,
  MessageCircle,
  Share,
  User,
} from "lucide-react";
import styles from "./StacksItems.module.scss";
import { useState } from "react";

const StackPagination = ({ numberOfPages }: { numberOfPages: number }) => {
  const [activePage, setActivePage] = useState(1);
  if (numberOfPages < 6) {
    return;
  }
  return (
    <div className={styles.stack_pagination}>
      <button
        onClick={() =>
          setActivePage((prev: number) => {
            if (prev === 1) {
              return prev;
            } else {
              return prev - 1;
            }
          })
        }
      >
        <ArrowLeft size={16} />
      </button>
      <button
        style={{ borderColor: activePage === 1 ? "#000" : "" }}
        onClick={() => setActivePage(1)}
      >
        1
      </button>
      <button
        style={{ borderColor: activePage === 2 ? "#000" : "" }}
        onClick={() => setActivePage(2)}
      >
        2
      </button>
      <button
        style={{ borderColor: activePage === 3 ? "#000" : "" }}
        onClick={() => setActivePage(3)}
      >
        3
      </button>
      {activePage >= 4 && activePage != numberOfPages && (
        <>
          <button>...</button>
          <button
            style={{ borderColor: activePage ? "#000" : "" }}
            onClick={() => setActivePage((prev) => prev)}
          >
            {activePage}
          </button>
          <button onClick={() => setActivePage((prev) => prev + 1)}>
            {activePage + 1}
          </button>
          {activePage != numberOfPages - 1 && (
            <button onClick={() => setActivePage((prev) => prev + 2)}>
              {activePage + 2}
            </button>
          )}

          <button>...</button>
        </>
      )}

      <button
        style={{ borderColor: activePage === numberOfPages ? "#000" : "" }}
        onClick={() => setActivePage(numberOfPages)}
      >
        {numberOfPages}
      </button>
      <button
        onClick={() =>
          setActivePage((prev: number) => {
            if (prev === numberOfPages) {
              return prev;
            } else {
              return prev + 1;
            }
          })
        }
      >
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

type StacksItemProps = {
  title: string;
};
const StacksItem = ({ title }: StacksItemProps) => {
  return (
    <div className={styles.stack_item}>
      <div className={styles.stack_item_image}></div>
      <div className={styles.stack_item_heading}>
        <User />
        <h3>{title}</h3>
        <span>31.09.2024</span>
      </div>
      <div className={styles.stack_item_description}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
          deserunt itaque animi eaque consequatur in, laborum tempora, eligendi
          at libero architecto atque iure eos officia tenetur sed, quam
          blanditiis placeat.
        </p>
      </div>

      <div className={styles.stack_item_technologies}>
        <span>JavaSript</span>
        <span>Python</span>
        <span>React</span>
        <span>Redux</span>
      </div>

      <div className={styles.stack_item_social}>
        <div className={styles.stack_item_likes}>
          <Heart size={18} />
          <span>0</span>
        </div>
        <div className={styles.stack_item_comments}>
          <MessageCircle size={18} />
          <span>0</span>
        </div>

        <button className={styles.stack_item_share}>
          <Share size={20} />
        </button>
      </div>
    </div>
  );
};

const StacksItems = () => {
  return (
    <div>
      <StacksItem title="Title 1" />
      <StacksItem title="Title 2" />
      <StacksItem title="Title 3" />
      <StackPagination numberOfPages={10} />
    </div>
  );
};

export default StacksItems;
