'use client'
import { useState } from "react";
import PrefectureCheckboxes from "@/components/PrefectureCheckboxes";
import PopulationChart from "@/components/PopulationChart";


const Home: React.FC = () => {
  const [selectedPrefCode, setSelectedPrefCode] = useState<number | null> (null);

  const handlePrefectureSelection = (prefCode: number) => {
    setSelectedPrefCode(prefCode);
  }

  return (
    <div>
      <h1>Population Trends by Prefecture</h1>
      <PrefectureCheckboxes onPrefectureSelect={handlePrefectureSelection}/>
      {selectedPrefCode && <PopulationChart prefCode={selectedPrefCode}/>}
    </div>
  );
};

export default Home;
