import CardsContainer from "../cardsContainer"
import cards from "../../../cards"

const CardsItemsSection2 = ({startNumber, endNumber}) => {

  return (
    <div>
        
        {cards.slice(startNumber, endNumber).map(({id,img,category,title,date,author}) => (
            
            <CardsContainer
            key={id}
            img={img}
            category={category}
            title={title}
            date={date}
            author={author}
            />
            
           ))}
          
    </div>
  )
}

export default CardsItemsSection2


