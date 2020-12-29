import css from "./Navbar.module.css";

const Navbar = ({ user }) => {
  user = user.split("@")[0].split(".")[0][0];

  return (
    <nav className={css.navbar}>
      <img className={css.logo} src="/logo192.png" />
      <div className={css.avatar}>{user}</div>
    </nav>
  );
};

export default Navbar;
