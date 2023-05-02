const getGuides = async (api, token) => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const response = await fetch(`${api}/api/collections/wiki/records`, requestOptions);

  return await response.json();
  
};

export default getGuides;
