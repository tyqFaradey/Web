import { FaTrashAlt } from "react-icons/fa";
import { Button } from "@/shared/ui";

import styles from "./Task.module.scss";

export default function Task({ id, name, completed, onToggle, onDelete }) {
  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete(id);
  };

  return (
    <li className={styles.listItem} onClick={() => onToggle(id)}>
      <div
        className={`${styles.taskContainer} ${completed ? styles.taskContainerCompleted : ""}`}
      >
        <p className={completed ? styles.completedText : ""}>{name}</p>
      </div>

      <Button onClick={handleDeleteClick}>
        <FaTrashAlt />
      </Button>
    </li>
  );
}
