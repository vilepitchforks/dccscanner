import css from "./Navbar.module.css";

const Navbar = ({ user }) => {
  user = user[0].toUpperCase();

  return (
    <nav className={css.navbar}>
      <img className={css.logo} src="/logo192.png" />
      <div className={css.avatar}>{user}</div>
    </nav>
  );
};

export default Navbar;
