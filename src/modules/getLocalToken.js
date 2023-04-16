export default function getLocalToken () {
  if (!localStorage.getItem('login_data')) {
    return false;
  } else {
    return JSON.parse(localStorage.getItem('login_data'));
  }
}