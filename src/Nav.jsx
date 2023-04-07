import Profile from './Profile';
import logo from './assets/nav-logo.svg';

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
      <Profile />
    </nav>
  );
}

export default Nav;
