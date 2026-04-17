import { useState } from "react";

import { Button } from "@/shared/ui/Button";

import styles from "./Buttons.module.scss";

function Buttons({ buttons, buttonClassName, className, ...props }) {
  const combinedClassName = `${styles.list} ${className || ""}`.trim();

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={combinedClassName} {...props}>
      {buttons.map((text, index) => (
        <Button
          className={buttonClassName}
          key={index}
          isActive={activeIndex === index}
          onClick={() => setActiveIndex(index)}
        >
          {text}
        </Button>
      ))}
    </div>
  );
}

export default Buttons;
