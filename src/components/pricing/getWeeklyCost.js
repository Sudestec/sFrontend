const getWeeklyCost = async (url) => {
  const response = await fetch(`${url}/api/collections/weekly_rate/records`);
  return await response.json(); 
};
export default getWeeklyCost;
