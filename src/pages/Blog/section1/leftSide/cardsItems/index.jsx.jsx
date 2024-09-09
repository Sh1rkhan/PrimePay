import CardsContainer from "../cardsContainer"
import CardsList from "../../../../../cards"

const CardsItems = () => {
const firstCard = CardsList()[0]

  return (
    <div>
        <CardsContainer
           key={firstCard.id}
           img={firstCard.img}
           title={firstCard.title}
           text={firstCard.text}
           date={firstCard.date}
           author={firstCard.author}
        />
    </div>
  )
}

export default CardsItems






// {cards.map(({id,img,title,text,date,author}) => (
            
//   <CardsContainer
//   key={id}
//   img={img}
//   title={title}
//   text={text}
//   date={date}
//   author={author}
//   />
  
//  ))}