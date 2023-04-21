const getCollections = async (api, token) => {
  const url = api+'/api/collections';
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  
  const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    },
    data = await fetch(url, requestOptions),
    jsonData = await data.json();

  if (data.status !== 200) {
    sessionStorage.clear();
    return 4;
  } else {
    sessionStorage.setItem('login_data', JSON.stringify(jsonData));
    return 3;
  }};
  
export default getCollections;
