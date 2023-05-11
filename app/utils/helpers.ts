export const fetchData = async (maskingName: string, modelMaskingName: string, cityIds: number[]): Promise<any[]> => {
  const requests = cityIds.map(async (cityId) => {
    const url = `https://www.carwale.com/api/modelpagedata/?makeMaskingName=${maskingName}&modelMaskingName=${modelMaskingName}&cityId=${cityId}&areaId=-1`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  });

  const responses = await Promise.all(requests);
  return responses;
};
