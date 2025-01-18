import { ComponentProps } from "react";

import clsx from "clsx";

import styles from "./Button.module.css";

type variant = "solid" | "outlined";
type Shape = "rectangle" | "circle";
type Size = "small" | "medium" | "large";

type Props = ComponentProps<"button"> & {
  variant?: variant;
  shape?: Shape;
  size?: Size;
  sameWidthHeight?: boolean;
};

function Button({
  children,
  className,
  variant = "solid",
  shape = "rectangle",
  size = "medium",
  sameWidthHeight = false,
  ...otherProps
}: Props) {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[shape],
        styles[size],
        sameWidthHeight && styles["same-width-height"],
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
