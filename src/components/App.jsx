import React from "react";
import Card from "./Card";
import emojiData from "./emojiData";

function createEntry(emojiData) {
  return (
    <Card
      key={emojiData.id}
      emoji={emojiData.emoji}
      name={emojiData.name}
      meaning={emojiData.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojiData.map(createEntry)}</dl>
    </div>
  );
}

export default App;
