import React, { createContext } from "react";
import shuffleArray from "./utils/shuffle-array";

export const BingoContext = createContext({
  bingoItems: [],
  selectedItems: [],
  setSelectedBingoItems: () => {},
  shuffleBingo: () => {},
});

export class BingoProvider extends React.Component {
  setSelectedBingoItems = items => {
    this.setState({ selectedItems: items });
  };

  shuffleBingo = () => {
    const shuffledArray = shuffleArray(this.state.bingoItems).slice(0, 16);
    this.setSelectedBingoItems(shuffledArray);
  };

  state = {
    bingoItems: [
      "Tuulikone",
      "Suomen lippu katsomossa",
      "Asuvaihdos",
      "Pakko laulaa mukana",
      "Tukka tötteröllä",
      "Koskettava kohtalo",
      "Modulaatio",
      "Balladi",
      "Joku ylösalaisin",
      "Lauletaan kahdella kiellellä",
      "Elektronista musiikkia",
      "Suomi saa 12 pistettä",
      "WTF-hetki",
      "Laulu kertoo rauhasta",
      "Ilotulitteet",
      "Vilkutus kameraan",
    ],
    selectedItems: [],
    setSelectedBingoItems: this.setSelectedBingoItems,
    shuffleBingo: this.shuffleBingo,
  };

  render() {
    return (
      <BingoContext.Provider value={this.state}>
        {this.props.children}
      </BingoContext.Provider>
    );
  }
}

export const BingoConsumer = BingoContext.Consumer;
