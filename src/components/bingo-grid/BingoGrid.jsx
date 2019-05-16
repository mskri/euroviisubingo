import React, { useEffect, useContext } from "react";
import BingoItem from "./BingoItem";
import { BingoContext } from "../../bingo-context";
import shuffleArray from "../../utils/shuffle-array";
import styles from "./BingoGrid.module.css";

const Bingo = () => {
  const { bingoItems, selectedItems, setSelectedBingoItems } = useContext(
    BingoContext
  );

  useEffect(() => {
    if (selectedItems.length === 0) {
      const shuffledArray = shuffleArray(bingoItems).slice(0, 16);
      setSelectedBingoItems(shuffledArray);
    }
  });

  return (
    <div className={styles.wrapper}>
      {selectedItems.map(text => (
        <BingoItem text={text} key={text} />
      ))}
    </div>
  );
};

export default Bingo;
