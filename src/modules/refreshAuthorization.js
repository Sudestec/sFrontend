const refreshAuthorization = async (api, token) => {
  const url = api+'/api/admins/auth-refresh',
    refreshHeaders = new Headers();
  refreshHeaders.append('Authorization', `Bearer ${token}`);

  const requestOptions = {
      method: 'POST',
      headers: refreshHeaders,
      redirect: 'follow' },
    data = await fetch(url, requestOptions),
    jsonData = await data.json();
  if (data.status !== 200) {
    localStorage.clear();
    return 4;
  } else {
    localStorage.setItem('login_data', JSON.stringify(jsonData));
    return 3;
  }};
  
export default refreshAuthorization;
