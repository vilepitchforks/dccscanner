import Link from "next/link";

import css from "./Navbar.module.css";

const Navbar = ({ user }) => {
  user = user[0].toUpperCase();

  return (
    <nav className={css.navbar}>
      <div className="flex items-center">
        <Link href="/">
          <img className={css.logo + " cursor-pointer"} src="/logo192.png" />
        </Link>
        <Link href="/rnr">
          <a className="text-white">R&R</a>
        </Link>
      </div>
      <div className={css.avatar}>{user}</div>
    </nav>
  );
};

export default Navbar;
