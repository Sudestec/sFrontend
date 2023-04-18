const refreshAuthorization = async (api, token) => {
  const url = api+'/api/collections/users/auth-refresh',
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
    return {state: 'error'};
  } else {
    localStorage.setItem('login_data', JSON.stringify(jsonData));
    return {state: 'authorized', data: jsonData};
  }};
  
export default refreshAuthorization;
