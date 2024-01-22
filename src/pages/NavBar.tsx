import { Link } from 'react-router-dom';
import AppsIcon from '/apps-icon.png';
import ProfileIcon from '/profile-icon.png';

function NavBar() {
  return (
    <nav>
        <ul id='search-nav-left' className='left nav-list'>
        <li className='nav-item'>
          <Link className='nav-link' to ='/images'>Images</Link>
        </li>
        </ul>
        <ul id="search-nav-right" className='right nav-list'>
          <li className='nav-item'>
            <Link className='nav-link' to ='/advanced'>Advanced</Link>
          </li>
          <li className='nav-item'>
            <img id='apps-icon' className='nav-icon' src={AppsIcon} alt='apps icon' />
          </li>
          <li className='nav-item'>
            <img className='nav-icon' src={ProfileIcon} alt='profile icon' />
          </li>
        </ul>
      </nav>
  )
}

export default NavBar;
