const logIn = async (api, username, password) => {
  const url = api+'/api/admins/auth-with-password';

  const formdata = new FormData();

  formdata.append('identity', username),
  formdata.append('password', password);

  const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    },
    data = await fetch(url, requestOptions),
    jsonData = await data.json(); 
  if (data.status !== 200) {
    return 4;
  } else {
    localStorage.setItem('login_data', JSON.stringify(jsonData));
    return 3;
  }};

export default logIn;
