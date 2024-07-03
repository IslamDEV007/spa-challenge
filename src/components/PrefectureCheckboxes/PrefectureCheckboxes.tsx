import React, { useState, useEffect, useCallback } from "react";
import { fetchPrefectures } from "@/utils/api";
import styles from './PrefectureCheckboxes.module.css';
import { Prefecture } from "@/types";
import RenderPrefectures from "./renderPrefectures";

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

  const handleCheckboxChange = useCallback((prefCode: number) => {
    setSelectedPrefectures((prev) =>
      prev.includes(prefCode)
        ? prev.filter((code) => code !== prefCode)
        : [...prev, prefCode]
    );

    onPrefectureSelect(prefCode);
  }, [onPrefectureSelect]);

  return (
    <div className={styles.checkboxContainer}>
      <RenderPrefectures prefectures={prefectures} handleCheckboxChange={handleCheckboxChange} />
    </div>
  );
};

export default React.memo(PrefectureCheckboxes);
