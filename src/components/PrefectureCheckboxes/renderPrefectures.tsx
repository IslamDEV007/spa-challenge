import React, { useMemo } from "react";
import styles from './PrefectureCheckboxes.module.css';
import { Prefecture } from "@/types";

type RenderPrefecturesProps = {
  prefectures: Prefecture[];
  handleCheckboxChange: (prefCode: number) => void;
};

const RenderPrefectures: React.FC<RenderPrefecturesProps> = ({ prefectures, handleCheckboxChange }) => {
  return useMemo(() => {
    return (
      <>
        {prefectures.map((pref) => (
          <label key={pref.prefCode} className={styles.checkboxLabel}>
            <input
              type="checkbox"
              value={pref.prefCode}
              className={styles.checkboxInput}
              onChange={() => handleCheckboxChange(pref.prefCode)}
            />
            {pref.prefName}
          </label>
        ))}
      </>
    );
  }, [prefectures, handleCheckboxChange]);
};

export default RenderPrefectures;
