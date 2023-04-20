export default async function createCustomer(url, token, data) {
  const {name, last , phone, identification, type} = data;
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);

  const formdata = new FormData();
  formdata.append('name', name);
  formdata.append('last', last);
  formdata.append('phone', phone);
  formdata.append('identification', identification);
  formdata.append('type', type);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };

  const response = await fetch(`${url}/api/collections/customers/records`, requestOptions);
  const jsonData = await response.json();
  console.log(jsonData);
  return jsonData; 

}
