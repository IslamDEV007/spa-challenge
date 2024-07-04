import React, { useState, useEffect, useCallback } from "react";
import { fetchPrefectures } from "@/utils/api";
import styles from './PrefectureCheckboxes.module.css';
import { Prefecture } from "@/types";
import RenderPrefectures from "./renderPrefectures";

/**
 * PrefectureCheckboxes component to render checkboxes for selecting prefectures.
 * PrefectureCheckboxesコンポーネントは、都道府県を選択するためのチェックボックスをレンダリングします。
 *
 * @param {Object} props - The properties for the PrefectureCheckboxes component.
 *                        PrefectureCheckboxesコンポーネントのプロパティ。
 * @param {(prefCode: number) => void} props.onPrefectureSelect - Callback function to handle prefecture selection.
 *                                                              都道府県選択を処理するコールバック関数。
 * @returns {JSX.Element} The rendered PrefectureCheckboxes component. / レンダリングされたPrefectureCheckboxesコンポーネント。
 */

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
