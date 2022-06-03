import { useEffect, useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";
function App() {
  const images = [
    { src: "/img/accept-man.PNG", matched: false },
    { src: "/img/bestWay-man.jpg", matched: false },
    { src: "/img/cat.png", matched: false },
    { src: "/img/crying-cat.jpg", matched: false },
    { src: "/img/denying man.PNG", matched: false },
    { src: "/img/Parviz.jpeg", matched: false },
  ];

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiseOne, setChoiseOne] = useState(null);
  const [choiseTwo, setChoiseTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiseOne(null);
    setChoiseTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };
  const handleClick = (card) => {
    !choiseOne ? setChoiseOne(card) : setChoiseTwo(card);
  };

  const resetTurn = () => {
    setChoiseOne(null);
    setChoiseTwo(null);
    setTurns((prevTurn) => prevTurn + 1);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  // compare 2 selected cards
  useEffect(() => {
    if (choiseOne) {
      setDisabled(true);
      if (choiseOne.src === choiseTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiseOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
      }

      setTimeout(() => resetTurn(), 500);
    }
  }, [choiseTwo]);

  console.log(cards);

  return (
    <div className="App ">
      <h1>Meme Memory</h1>
      <button onClick={shuffleCards} className="btn">
        New Game
      </button>

      <div className="grid grid-cols-4 gap-2">
        {cards.map((item) => (
          <SingleCard
            key={item.id}
            item={item}
            handleClick={handleClick}
            flipped={item === choiseOne || item === choiseTwo || item.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <p className=" m-5 bg-rose-700 w-auto">Turns: {turns}</p>
    </div>
  );
}

export default App;
