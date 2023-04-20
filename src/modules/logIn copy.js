const logIn = async (api, username, password) => {
  const url = api+'/api/collections/users/auth-with-password';

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
    return 'error';
  } else {
    localStorage.setItem('login_data', JSON.stringify(jsonData));
    return jsonData;
  }};

export default logIn;
