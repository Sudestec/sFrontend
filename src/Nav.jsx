import Profile from './modules/Profile';
import logo from './assets/nav-logo.svg';
import Collections from './modules/Collections';

function Logo() {

  return (
    <ul>
      <li>
        <img src={logo} alt="logo" />
      </li>
      <li>
        <span>sAPI</span>
      </li>
    </ul>
  );
}

function Nav() {
  return (
    <nav class='container'>
      <Logo />
      <ul>
        <Collections/>
        <Profile />
      </ul>
    </nav>
  );
}

export default Nav;
