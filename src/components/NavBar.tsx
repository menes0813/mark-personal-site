import classNames from "classnames";
import { NavContext, NavState } from "providers/NavProvider";
import React, { useContext } from "react";

const NavBar: React.FC = () => {
  const { navState, setNavState } = useContext(NavContext);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button
            className={classNames("navbar-link", {
              active: navState === NavState.ABOUT,
            })}
            onClick={() => setNavState(NavState.ABOUT)}
            data-nav-link
          >
            About
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={classNames("navbar-link", {
              active: navState === NavState.RESUME,
            })}
            onClick={() => setNavState(NavState.RESUME)}
            data-nav-link
          >
            Resume
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={classNames("navbar-link", {
              active: navState === NavState.PORTFOLIO,
            })}
            onClick={() => setNavState(NavState.PORTFOLIO)}
            data-nav-link
          >
            Portfolio
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={classNames("navbar-link", {
              active: navState === NavState.BLOG,
            })}
            onClick={() => setNavState(NavState.BLOG)}
            data-nav-link
          >
            Blog
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={classNames("navbar-link", {
              active: navState === NavState.CONTACT,
            })}
            onClick={() => setNavState(NavState.CONTACT)}
            data-nav-link
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
