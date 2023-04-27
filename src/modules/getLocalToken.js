export default function getLocalToken () {
  return JSON.parse(sessionStorage.getItem('login_data'));
}
