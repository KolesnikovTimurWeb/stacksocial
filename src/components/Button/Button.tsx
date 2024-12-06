import { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode; // Content inside the button
  variant?: "primary" | "secondary" | "primaryOut";
  size?: "small" | "normal" | "large";
  customClass?: string; // Optionally allow custom styles
}

const Button = ({
  children,
  variant = "primary",
  size = "normal",
  customClass = "",
  ...props
}: ButtonProps) => {
  const variantClass = {
    primary: styles.button_primary,
    primaryOut: styles.button_primary_outlined,
    secondary: styles.button_secondary,
  }[variant];
  const sizeClass = {
    small: styles.button_small,
    normal: styles.button_normal,
    large: styles.button_large,
  }[size];
  return (
    <button className={`${variantClass} ${sizeClass}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
