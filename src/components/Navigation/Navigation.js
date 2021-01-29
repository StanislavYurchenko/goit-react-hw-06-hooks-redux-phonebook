import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="selected">
            Home page
          </NavLink>
        </li>
        <li>
          <NavLink to="/phone-book" activeClassName="selected">
            Phone book
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
