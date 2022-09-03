import style from '../modules/navButton.module.css';
export default function NavButton({ children, onClick }) {
  return (
    <button
      className={style.navButton}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}