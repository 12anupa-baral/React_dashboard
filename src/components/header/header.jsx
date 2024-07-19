import { useState } from "react";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        React<span>Starter</span>.
      </h2>
    </Link>
  </div>
);

const activeLink =({isActive})=>(isActive?`${styles.active}`:"")

function Header() {
  const [showMenu, setshowMenu] = useState(false)
  const toggleMenu = () => {
    setshowMenu(!showMenu)
  }
  const hideMenu = () => {
    setshowMenu(false)
  }


  return (
    <header>
      <div className={styles.header}>
        {logo}
        <nav className={showMenu?`${styles["show-nav"]}`:`${styles["hide-nav"]}`}>
          <div className={showMenu?`${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]}`:`${styles["nav-wrapper"]}`}  onClick={hideMenu}>

          </div>

          <ul onClick={hideMenu}>
            <li className={styles["logo-mobile"]}>
              {logo}
              <FaTimes size={22} color="#fff" onClick={hideMenu}/>
            </li>

            <li>
              <NavLink to='/' className={activeLink}>
              Home

              </NavLink>
            </li>

            <li>
              <NavLink to='/dashboard' className={activeLink}>
              Dashboard

              </NavLink>
            </li>
          </ul>

        </nav>
        <div className={styles["menu-icon"]}>
          <HiOutlineMenuAlt3 size={28}   onClick={toggleMenu} />

         
        </div>
      </div>
    </header>
  )
}

export default Header