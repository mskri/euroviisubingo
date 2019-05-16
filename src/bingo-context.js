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
      "Modulaatio",
      "Asumuutos",
      "Suomen lippu",
      "WTF-hetki",
      "Juontajan kömpelö vitsi",
      "Thank you Europe!",
      "Sydänmerkki käsillä",
      "Krista Siegfrids ei tykkää",
      "Esiintyjä laulaa silmät kiinni",
      "Yli&shy;polvensaap&shy;paat",
      "Esiintyjä kilpaillut The Voicessa, Idolsissa tai X Factorissa",
      "Salamoita",
      "Kielen vaihto",
      "Nahkavaate",
      "Kokovalkoiset vaatteet",
      "Perin&shy;nekult&shy;tuuri",
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
