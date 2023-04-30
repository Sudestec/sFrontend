const getWeeklyCost = async (url, token) => {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);

  const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    },
    response = await fetch('https://api.sudeste.ar/api/collections/pricing/records?filter=period=\'Weekly\'&sort=-updated&perPage=1', requestOptions);

  return await response.json(); 
};

export default getWeeklyCost;