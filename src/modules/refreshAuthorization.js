


export default async function refreshAuthorization(api, token) {
  const url = api+'/api/admins/auth-refresh';
  
  if (!token && localStorage.getItem('pocketbase_auth')) {
    const localData = JSON.parse(localStorage.getItem('pocketbase_auth'));
    if (localData.token) {
      const token = localData.token;
      const refreshHeaders = new Headers();
      refreshHeaders.append('Authorization', `Bearer ${token}`);
    
      const requestOptions = {
        method: 'POST',
        headers: refreshHeaders,
        redirect: 'follow'
      };
      const data = await fetch(url, requestOptions);
      const jsonData = await data.json();
      return jsonData;
    }}}

console.log(refreshAuthorization('https://api.sudeste.ar'));