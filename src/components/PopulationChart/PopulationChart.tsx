import React, { useState, useEffect, useCallback } from "react";
import { fetchPopulationComposition } from "@/utils/api";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from "./PopulationChart.module.css";
import { PopulationData } from "@/types";
import PopulationTypeSelector from "./PopulationTypeSelector";

/**
 * Props for PopulationChart component.
 * PopulationChartコンポーネントのプロパティ。
 */
interface PopulationChartProps {
  prefCode: number;
}

/**
 * PopulationChart component to display population trends for a selected prefecture.
 * PopulationChartコンポーネントは、選択された都道府県の人口推移を表示します。
 *
 * @param {PopulationChartProps} props - The properties for the PopulationChart component.
 *                                      PopulationChartコンポーネントのプロパティ。
 * @returns {JSX.Element} The rendered PopulationChart component. / レンダリングされたPopulationChartコンポーネント。
 */

const PopulationChart: React.FC<PopulationChartProps> = ({ prefCode }) => {
  const [populationData, setPopulationData] = useState<PopulationData[]>([]);
  const [populationType, setPopulationType] = useState<string>('総人口');

  const getPopulationData = useCallback(async () => {
    const data = await fetchPopulationComposition(prefCode);
    const filteredData = data.data.find((item: any) => item.label === populationType);
    setPopulationData(filteredData.data);
  }, [prefCode, populationType]);

  useEffect(() => {
    getPopulationData();
  }, [getPopulationData]);

  const handlePopulationTypeChange = useCallback((type: string) => {
    setPopulationType(type);
  }, []);


  return (
    <div className={styles.chartContainer}>
      <PopulationTypeSelector onTypeChange={handlePopulationTypeChange} />
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={populationData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PopulationChart;
