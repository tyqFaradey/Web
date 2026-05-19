import { useState } from "react";

import { Button } from "@/shared/ui/Button";

import styles from "./Buttons.module.scss";

export default function Buttons({
    buttons,
    onClick,
    buttonClassName,
    className,
    ...props
}) {
    const combinedClassName = `${styles.list} ${className || ""}`.trim();

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index, text) => {
        setActiveIndex(index);

        if (onClick) {
            onClick(index, text);
        }
    };

    return (
        <div className={combinedClassName} {...props}>
            {buttons.map((text, index) => (
                <Button
                    className={buttonClassName}
                    key={index}
                    isActive={activeIndex === index}
                    onClick={() => handleClick(index, text)}
                >
                    {text}
                </Button>
            ))}
        </div>
    );
}
