import React, { useCallback } from "react";
import styles from "./PopulationChart.module.css";

interface PopulationTypeSelectorProps {
  onTypeChange: (type: string) => void;
}

const PopulationTypeSelector: React.FC<PopulationTypeSelectorProps> = ({ onTypeChange }) => {
  const populationTypes = [
    { label: '総人口', value: '総人口' },
    { label: '年少人口', value: '年少人口' },
    { label: '生産年齢人口', value: '生産年齢人口' },
    { label: '老年人口', value: '老年人口' }
  ];

  const handleTypeChange = useCallback((type: string) => {
    onTypeChange(type);
  }, [onTypeChange]);

  return (
    <div className={styles.populationTypeSelector}>
      {populationTypes.map(type => (
        <button key={type.value} onClick={() => handleTypeChange(type.value)}>
          {type.label}
        </button>
      ))}
    </div>
  );
};

export default PopulationTypeSelector;
