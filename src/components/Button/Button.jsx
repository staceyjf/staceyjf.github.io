import styles from "./Button.module.scss";

function Button({ buttonText, SvgIcon }) {
  return (
    <button className={styles.button}>
      {SvgIcon && <SvgIcon />}
      {buttonText}
    </button>
  );
}

export default Button;
