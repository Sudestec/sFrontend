const getSpares = async (api, token, parameters) => {
  const url = `${api}/api/collections/spares/records?page=${page}&perPage=${perPage}&sort=${'-updated'+sort}&filter=${filter}`,
    myHeaders = new Headers();
  myHeaders.append('Authorization', token);

  const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    },
    { page, perPage, sort, filter, expand } = parameters,
    data = await fetch(url, requestOptions),
    jsonData = await data.json(); 
  if (data.status !== 200) {
    return data.status;
  } else {
    return jsonData;

  }};

export default getSpares;

