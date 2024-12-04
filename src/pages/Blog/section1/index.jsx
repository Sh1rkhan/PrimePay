import Title from "./title"
import CardsItemsSection from "../cardsItems/index.jsx"

import SmallCards from "./rightSide/index.jsx"

const section1 = () => {
  return (
   <>
    <Title></Title>
    <div className="py-10 px-6 mx-26">
    <div className="container grid grid-cols-2 gap-10 mb-10">
    <CardsItemsSection startNumber={0} endNumber={1}/>
    <SmallCards startNumber={5} endNumber={8} />
    </div>
    
</div>
    </>
  )
}

export default section1

