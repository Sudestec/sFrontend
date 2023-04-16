const getSpares = async (api, token, parameters = { page: '', perPage: '', sort: '', filter: '', expand: '' }) => {
  const url = api+'/api/collections/spares',
    myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);

  const params = new Request(api, {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  });

  const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    },
    { page, perPage, sort, filter, expand } = parameters,
    data = await fetch(`${url}/records?page=${page}&perPage=${perPage}&sort=${'-updated'+sort}&filter=${filter}&expand${expand}`, requestOptions),
    jsonData = await data.json(); 
  if (data.status !== 200) {
    return data.status;
  } else {
    console.log(jsonData);
    //localStorage.setItem('login_data', JSON.stringify(jsonData));
    return jsonData;

  }};

export default getSpares;

