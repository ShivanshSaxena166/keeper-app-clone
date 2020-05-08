import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
function cn(noteItem) {
  return <Note title={noteItem.title} content={noteItem.content} />;
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(cn)}
      <Footer />
    </div>
  );
}

export default App;
