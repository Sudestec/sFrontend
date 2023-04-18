export default async function newCustomer(url, token, data) {
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

  return (response.status !== 200 ) ? false : jsonData; 

}

const url = 'https://api.sudeste.ar',
  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2xsZWN0aW9uSWQiOiJfcGJfdXNlcnNfYXV0aF8iLCJleHAiOjE2ODE3OTIwNTIsImlkIjoiY3MwdHZscjlvdThpdGF2IiwidHlwZSI6ImF1dGhSZWNvcmQifQ.ILwGDTwY5gC6gXDSeNXFe4f1YYKeM5Cdr9hYK4pw1AQ',
  customer = {
    name: 'Test',
    last: 'Last',
    phone: 12312415152,
    identification: 124125125,
    type: 'p7z8l5ez9uicwju',
  };

newCustomer(url,token,customer)
  .then( e => console.log(e));