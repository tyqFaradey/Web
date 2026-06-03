import { useState } from "react";

import { ToolBar } from "@/features/ToolBar";
import { Task } from "@/entities/Task";

import styles from "./TodoList.module.scss";

export default function TodoList() {
  const [textValue, setTextValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleCreate = () => {
    if (textValue.trim() === "") {
      return;
    }
    const newTask = {
      id: Date.now(),
      text: textValue.trim(),
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTextValue("");
  };

  const handleClearList = () => {
    setTasks([]);
  };

  const handleToggleTask = (taskId) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className={styles.todoList}>
      <h1>Список задач</h1>
      <ToolBar
        value={textValue}
        onTextChange={handleTextChange}
        onCreate={handleCreate}
        onClear={handleClearList}
      />
      <ul className={styles.listDisplay}>
        {tasks.length === 0 ? (
          <p>Пустенько</p>
        ) : (
          tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              name={task.text}
              completed={task.completed}
              onToggle={handleToggleTask}
              onDelete={handleDeleteTask}
            />
          ))
        )}
      </ul>
    </div>
  );
}
