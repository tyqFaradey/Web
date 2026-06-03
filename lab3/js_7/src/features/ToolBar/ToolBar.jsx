import { TextBox, Button } from "@/shared/ui";

import styles from "./ToolBar.module.scss";

export default function ToolBar({ value, onTextChange, onCreate, onClear }) {
  return (
    <div className={styles.toolBar}>
      <TextBox
        className={styles.titleField}
        value={value}
        onChange={onTextChange}
      />
      <Button onClick={onCreate}>Создать</Button>
      <Button outlined={true} onClick={onClear}>
        Отчистить
      </Button>
    </div>
  );
}
