import CardColumn from "../../cardsContainer/cardsColum";
import cards from "../../../../cards";

const SmallCards = ({ startNumber, endNumber }) => {
  return (
    <div>
      {cards
        .slice(startNumber, endNumber)
        .map(({ id, img, category, title, date, author }) => (
          <CardColumn
            key={id}
            img={img}
            category={category}
            title={title}
            date={date}
            author={author}
          />
        ))}
    </div>
  );
};

export default SmallCards;
