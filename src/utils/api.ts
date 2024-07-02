import axios from "axios"

const API_KEY = process.env.NEXT_PUBLIC_RESAS_API_KEY;
const BASE_URL = 'https://opendata.resas-portal.go.jp/api/v1';

export const fetchPrefectures = async () => {
  const response = await axios.get(`${BASE_URL}/prefectures`, {
    headers: {'X-API-KEY': API_KEY},
  });
  return response.data.result
}

export const fetchPopulationComposition = async (prefCode: number) => {
  const response = await axios.get(`${BASE_URL}/population/composition/perYear`, {
    params: {cityCode: '-', prefCode },
    headers: {'X-API-KEY': API_KEY},
  });
  return response.data.result;
};