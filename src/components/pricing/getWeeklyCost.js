const getWeeklyCost = async (url, token) => {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);

  const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    },
    response = await fetch('api/collections/weekly_rate/records', requestOptions);

  return await response.json(); 
};

export default getWeeklyCost;