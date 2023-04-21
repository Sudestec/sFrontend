export default function getLocalToken () {
  if (!sessionStorage.getItem('login_data')) {
    return false;
  } else {
    const data = JSON.parse(sessionStorage.getItem('login_data'));
    return (data.token) ? data.token : false;
  }
}