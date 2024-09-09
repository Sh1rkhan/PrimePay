import CardsItemsSection2 from "../../cardsItems";

const CardsContainerSec2 = () => {
  return (
    <div className="container ">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 py-10 px-6 mx-26">
      <CardsItemsSection2 
      startNumber={1} endNumber={3}/>
      <CardsItemsSection2 
      startNumber={3} endNumber={5}/>
      </div>
    </div>
  )
}

export default CardsContainerSec2