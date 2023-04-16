import { url } from './pbConnection.js';

const getJobs = async (api, token, parameters) => {
  const url = api+'/api/collections/jobs',
    myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);

  const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    },
    { page, perPage, sort, filter, expand } = parameters,
    data = await fetch(`${url}/records?page=${page}&perPage=${perPage}&sort=${sort}&filter=${filter}&expand${expand}`, requestOptions),
    jsonData = await data.json(); 
  if (data.status !== 200) {
    return data.status;
  } else {
    //localStorage.setItem('login_data', JSON.stringify(jsonData));
    return jsonData;

  }};

export default getJobs;