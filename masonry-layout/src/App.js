import lReact, { useState } from 'react';
import './App.css';

function App() {
  const [images, setImages] = useState ([
    {url: "https://source.unsplash.com/random/1"},
    {url: "https://source.unsplash.com/random/2"},
    {url: "https://source.unsplash.com/random/3"},
    {url: "https://source.unsplash.com/random/4"},
    {url: "https://source.unsplash.com/random/5"},
    {url: "https://source.unsplash.com/random/6"}
  ])
  
  return (
    <div className="App">
      <div className="cardcontainer">

      </div>
      <div className="btnContainer">
        <button></button>
      </div>
      
    </div>
  );
}

export default App;
