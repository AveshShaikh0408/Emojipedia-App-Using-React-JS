import React from "react";
import Card from "./Card";
import emojiData from "./emojiData";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojiData.map((emojiData) => (
          <Card
            key={emojiData.id}
            emoji={emojiData.emoji}
            name={emojiData.name}
            meaning={emojiData.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
