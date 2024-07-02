import { useState, useEffect } from "react";
import { fetchPrefectures } from "@/utils/api";
import styles from './PrefectureCheckboxes.module.css';

type Prefecture = {
  prefCode: number;
  prefName: string;
}

const PrefectureCheckboxes: React.FC<{ onPrefectureSelect: (prefCode: number) => void }> = ({ onPrefectureSelect }) => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);
  const [selectedPrefectures, setSelectedPrefectures] = useState<number[]>([]);
  
  useEffect(() => {
    const getPrefectures = async () => {
      const data = await fetchPrefectures();
      setPrefectures(data);
    };

    getPrefectures();
  }, []);

  const handleCheckboxChange = (prefCode: number) => {
    setSelectedPrefectures((prev) =>
    prev.includes(prefCode)
    ? prev.filter((code) => code !== prefCode)
    : [...prev, prefCode] );

    onPrefectureSelect(prefCode);
  };

  return (
    <div className={styles.checkboxContainer}>
      {prefectures.map((pref) => (
        <label key={pref.prefCode} className={styles.checkboxLabel}>
          <input
            type="checkbox"
            value={pref.prefCode}
            onChange={() => handleCheckboxChange(pref.prefCode) }
          />
          {pref.prefName}
        </label>
      ))}

    </div>
  )
};

export default PrefectureCheckboxes;