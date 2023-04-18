export async function downloadBill (url, token, spareId, fileName) {
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);
  
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  const data = await fetch(`${url}/api/files/spares/${spareId}/${fileName}`, requestOptions);
  
  if (data.status !== 200) {
    return false;
  } else {
    return data;
  }}

