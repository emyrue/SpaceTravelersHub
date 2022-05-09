const retrieveMissions = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = response.json;
  return data;
};

export default retrieveMissions;
