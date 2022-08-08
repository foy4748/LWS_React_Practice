import { NavLink } from "react-router-dom";
<NavLink />;

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/"> Home</NavLink>
        </li>
        <li>
          <NavLink to="/cat-fact"> Cat Fact</NavLink>
        </li>
        <li>
          <NavLink to="/form"> Subscribe</NavLink>
        </li>
        <li>
          <NavLink to="/form/form2"> Details</NavLink>
        </li>
        <li>
          <NavLink to="/emoji"> Emoji</NavLink>
        </li>
        <li>
          <NavLink to="/reducer-hook"> Counter</NavLink>
        </li>
        <li>
          <NavLink to="/temperature"> Temperature</NavLink>
        </li>
        <li>
          <NavLink to="/text"> Text </NavLink>
        </li>
        <li>
          <NavLink to="/counters"> Simple Counter</NavLink>
        </li>
        <li>
          <NavLink to="/context-api"> Context API </NavLink>
        </li>
        <li>
          <NavLink to="/state-hook"> State Hook</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
