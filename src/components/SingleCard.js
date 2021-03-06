import "./SingleCard.css";

const MakeGridCards = ({ item, handleClick, flipped, disabled }) => {
  return (
    <div
      key={item.id}
      className=" cursor-pointer hover:opacity-80 hover:scale-105 border-white border-2 rounded-md"
    >
      {flipped && <img src={item.src}></img>}
      {!flipped && (
        <img
          src="/img/cover.jpg"
          onClick={() => {
            if (!disabled) {
              handleClick(item);
            }
          }}
        ></img>
      )}
    </div>
  );
};

export default MakeGridCards;

{
  /* */
}
