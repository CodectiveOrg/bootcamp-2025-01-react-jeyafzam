import { ReactNode } from "react";


import styles from "./Input.module.css";

type props ={
  placeholder ?: string,
  suffixIcon ? : ReactNode
}
const Input = ({placeholder, suffixIcon}:props) => {
  return (
    <div className={styles["search-box"]}>
      <input type="text" placeholder={placeholder} />
      {suffixIcon}
    </div>
  );
};
export default Input;
