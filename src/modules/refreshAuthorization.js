const refreshAuthorization = async (api, token) => {
  const url = api+'/api/collections/employees/auth-refresh',
    refreshHeaders = new Headers();
  refreshHeaders.append('Authorization', `Bearer ${token}`);

  const requestOptions = {
      method: 'POST',
      headers: refreshHeaders,
      redirect: 'follow' },
    data = await fetch(url, requestOptions),
    jsonData = await data.json(); 
  sessionStorage.setItem('login_data', JSON.stringify(jsonData));
  return jsonData;
};
  
export default refreshAuthorization;
