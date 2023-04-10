export default async function logIn(api, username, password) {
  const url = api+'/api/admins/auth-with-password';
  
  const formdata = new FormData();
  formdata.append('identity', username),
  formdata.append('password', password);
  
  const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    },
    response = await fetch(url, requestOptions);
  return await response.json(); 
}

logIn('https://api.sudeste.ar', 'facu.vdp@gmail.com', 'facU1234@$')
  .then( e => (console.log(e)));