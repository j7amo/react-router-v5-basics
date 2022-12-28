import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={styles.header}>
      <div>React Router Demo</div>
      <nav>
        <ul>
          <li>
            {/* why can't we just use <a> elements? why do we need some 3rd party components?
            because using <a> will TRIGGER a new HTTP request by browser, and the response
            will hold the INDEX.HTML file which will be read by the browser, page will be RELOADED,
            and we basically RESTART the app and LOSE app state...
            we could've written our own implementation, but we don't have to!
            React Router has <Link> and <NavLink> components with these features:
            1) it renders <a> element under the hood
            2) it listens to clicks on this element
            3) it prevents default browser behaviour with evt.preventDefault
            4) it changes the URL in the browser accordingly
            how do we select the most appropriate component of these two?
            - when we just need some simple link WITHOUT ACTIVE STATE STYLING we use <Link>
            - when we need ACTIVE LINK STATE STYLING (e.g. to show user in the navbar what page
            he currently is on) we use <NavLink> */}
            <NavLink to="/welcome" activeClassName={styles.active}>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName={styles.active}>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
