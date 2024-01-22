import { Link } from 'react-router-dom';
import ProfileIcon from '/profile-icon.png';

function NavBar() {
  return (
    <nav>
      <ul id="search-nav-left" className="left nav-list">
        <li className="nav-item">
          <Link className="nav-link" to="/images">
            Images
          </Link>
        </li>
      </ul>
      <ul id="search-nav-right" className="right nav-list">
        <li className="nav-item">
          <Link className="nav-link" to="/advanced">
            Advanced
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            <img className="nav-icon" src={ProfileIcon} alt="profile icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
