import styles from "./Button.module.scss";

function Button({ buttonText, SvgIcon, className }) {
  return (
    <button className={`${styles.button} ${className}`}>
      {SvgIcon && <SvgIcon />}
      {buttonText}
    </button>
  );
}

export default Button;
