export default function getLocalToken () {
  if (!localStorage.getItem('login_data')) {
    return false;
  } else {
    const data = JSON.parse(localStorage.getItem('login_data'));
    return (data.token) ? data.token : false;
  }
}