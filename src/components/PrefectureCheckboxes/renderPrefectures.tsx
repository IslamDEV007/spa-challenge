import React, { useMemo } from "react";
import styles from './PrefectureCheckboxes.module.css';
import { Prefecture } from "@/types";

/**
 * Props for RenderPrefectures component.
 * RenderPrefecturesコンポーネントのプロパティ。
 */
type RenderPrefecturesProps = {
  prefectures: Prefecture[];
  handleCheckboxChange: (prefCode: number) => void;
};

/**
 * RenderPrefectures component to render checkboxes for each prefecture.
 * RenderPrefecturesコンポーネントは、各都道府県のチェックボックスをレンダリングします。
 *
 * @param {RenderPrefecturesProps} props - The properties for the RenderPrefectures component.
 *                                        RenderPrefecturesコンポーネントのプロパティ。
 * @returns {JSX.Element} The rendered RenderPrefectures component. / レンダリングされたRenderPrefecturesコンポーネント。
 */

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
