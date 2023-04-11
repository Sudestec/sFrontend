import { url } from './pbConnection';

const getJobs = async (api, token) => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODI0MDM3MzgsImlkIjoiMmd0NDU5dG1pajl3bDVsIiwidHlwZSI6ImFkbWluIn0.oyg-2ztTMszy-getDArIuu6TBothXXo2NH4LgWr35HM');

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const data = await fetch('https://api.sudeste.ar/api/collections/jobs/records?page&perPage=1&sort&filter&expand', requestOptions);
};