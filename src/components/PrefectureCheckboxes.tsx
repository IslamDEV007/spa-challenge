import { useState, useEffect } from "react";
import { fetchPrefectures } from "@/utils/api";
import styles from './PrefectureCheckboxes.module.css';

type Prefecture = {
  prefCode: number;
  prefName: string;
}

const PrefectureCheckboxes: React.FC = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  const [selectedPrefectures, setSelectedPrefectures] = useState<number[]>([]);
  
  useEffect(() => {
    const getPrefectures = async () => {
      const data = await fetchPrefectures();
      setPrefectures(data);
    };

    getPrefectures();
  }, []);

  const handleCheckboxChanges = (prefCode: number) => {
    setSelectedPrefectures((prev) =>
    prev.includes(prefCode)
      ?prev.filter((code) => code !== prefCode)
    : [...prev, prefCode] )
  };

  return (
    <div className={styles.checkboxContainer}>
      {prefectures.map((pref) => (
        <label key={pref.prefCode} className={styles.checkboxLabel}>
          <input
            type="checkbox"
            value={pref.prefCode}
            onChange={() => handleCheckboxChanges(pref.prefCode) }
          />
          {pref.prefName}
        </label>
      ))}

    </div>
  )
};

export default PrefectureCheckboxes;