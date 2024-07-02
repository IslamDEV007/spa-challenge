'use client'
import { useState } from "react";
import PrefectureCheckboxes from "@/components/PrefectureCheckboxes/index";
import PopulationChart from "@/components/PopulationChart/PopulationChart";
import styles from "./page.module.css"


const Home: React.FC = () => {
  const [selectedPrefCode, setSelectedPrefCode] = useState<number | null> (null);

  const handlePrefectureSelection = (prefCode: number) => {
    setSelectedPrefCode(prefCode);
  }

  return (
    <div className={styles.container}>
      <h1>都道府県別の総人口推移</h1>
      <PrefectureCheckboxes onPrefectureSelect={handlePrefectureSelection}/>
      {selectedPrefCode && <PopulationChart prefCode={selectedPrefCode}/>}
    </div>
  );
};

export default Home;
