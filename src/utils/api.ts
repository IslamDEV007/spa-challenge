import axios from "axios"

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://opendata.resas-portal.go.jp/api/v1';

/**
 * Fetches the list of prefectures from the API.
 * APIから都道府県のリストを取得します。
 *
 * @returns {Promise<Prefecture[]>} A promise that resolves to the list of prefectures.
 *                                 都道府県のリストを解決するPromise。
 */

export const fetchPrefectures = async () => {
  const response = await axios.get(`${BASE_URL}/prefectures`, {
    headers: {'X-API-KEY': API_KEY},
  });
  return response.data.result;
}

/**
 * Fetches the population composition for a specific prefecture.
 * 特定の都道府県の人口構成を取得します。
 *
 * @param {number} prefCode - The code of the prefecture. / 都道府県のコード。
 * @returns {Promise<any>} A promise that resolves to the population composition data.
 *                        人口構成データを解決するPromise。
 */

export const fetchPopulationComposition = async (prefCode: number) => {
  const response = await axios.get(`${BASE_URL}/population/composition/perYear`, {
    params: {cityCode: '-', prefCode },
    headers: {'X-API-KEY': API_KEY},
  });
  return response.data.result;
};