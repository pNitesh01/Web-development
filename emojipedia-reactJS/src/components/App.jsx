import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map((emoticon) => {
        return (
          <Entry
            key={emoticon.id}
            emoji={emoticon.emoji}
            title={emoticon.name}
            desc={emoticon.meaning}
          />
        );
      })}
      </dl>
    </div>
  );
}

export default App;
