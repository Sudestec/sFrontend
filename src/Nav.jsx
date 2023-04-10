import logo from './assets/nav-logo.svg';
import Profile from './components/Profile';
import Collections from './components/Collections';
import Jobs from './components/Jobs';

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
        <Jobs />
        <Collections/>
        <Profile />
      </ul>
    </nav>
  );
}

export default Nav;
