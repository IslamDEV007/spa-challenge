import { useState, useEffect } from "react";
import { fetchPopulationComposition } from "@/utils/api";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from "./PopulationChart.module.css"

type PopulationData = {
   year: number;
   value: number;
}

type PopulationChartProps = {
  prefCode: number;
}

const PopulationChart: React.FC<PopulationChartProps> = ({prefCode}) => {
  const [populationData, setPopulationData] = useState<PopulationData[]>([]);
  const [populationType, setPopulationType] = useState<string>('総人口');

  useEffect(() => {
    const getPopulationData = async () => {
      const data = await fetchPopulationComposition(prefCode);
      const filteredData = data.data.find((item: any) => item.label === populationType);
      setPopulationType(filteredData);
    };

    getPopulationData();
  }, [prefCode, populationType]);

  return (
    <div className={styles.chartContainer}>
      <div className={styles.populationTypeSelector}>
        <button onClick={() => setPopulationType('総人口')}>総人口</button>
        <button onClick={() => setPopulationType('年少人口')}>年少人口</button>
        <button onClick={() => setPopulationType('生産年齢人口')}>生産年齢人口</button>
        <button onClick={() => setPopulationType('老年人口')}>老年人口</button>
      </div>
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