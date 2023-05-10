const getCustomers = async (api, token, parameters = { page: '', perPage: '', sort: ''}) => {
  const url = api+'/api/collections/customers',
    myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);

  const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    },
    { page, perPage, sort } = parameters,
    data = await fetch(`${url}/records?page=${page}&perPage=${perPage}&sort=${sort}`, requestOptions),
    jsonData = await data.json(); 
  return jsonData;

};

export default getCustomers;

