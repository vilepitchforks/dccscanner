import css from "./ModalBackground.module.css";

const ModalBackground = ({ children, trigger }) => {
  return (
    <div
      className={css.background}
      onClick={e => /background/.test(e.target.className) && trigger(false)}
    >
      {children}
    </div>
  );
};

export default ModalBackground;
