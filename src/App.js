import { useState } from "react";
import "./App.css";
function App() {
  const images = [
    { src: "/img/accept-man.PNG" },
    { src: "/img/bestWay-man.jpg" },
    { src: "/img/cat.png" },
    { src: "/img/crying-cat.jpg" },
    { src: "/img/denying man.PNG" },
    { src: "/img/Parviz.jpeg" },
  ];
  const cover = { src: "/img/cover.jpg" };
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Meme Memory</h1>
      <button onClick={shuffleCards} className="btn">
        New Game
      </button>
    </div>
  );
}

export default App;
