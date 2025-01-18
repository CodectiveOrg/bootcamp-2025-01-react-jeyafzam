import { ReactNode } from "react";

import styles from "./Input.module.css";

type Props = {
  placeholder?: string;
  suffixIcon?: ReactNode;
};

const Input = ({ placeholder, suffixIcon }: Props) => {
  return (
    <div className={styles["input"]}>
      <input type="text" placeholder={placeholder} />
      {suffixIcon}
    </div>
  );
};

export default Input;
