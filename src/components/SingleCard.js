import { useState } from "react";
import "./SingleCard.css";

const MakeGridCards = ({ item }) => {
  const [showCard, setShowCard] = useState(true);
  return (
    <div
      key={item.id}
      className=" cursor-pointer hover:opacity-80 hover:scale-105 border-white border-2 rounded-md"
      onClick={() => setShowCard(item.id)}
    >
      {false && <img src={item.src}></img>}
      {<img src="/img/cover.jpg"></img>}
    </div>
  );
};

export default MakeGridCards;

{
  /* */
}
