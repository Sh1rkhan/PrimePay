import Title from "./title"
import CardsItems from "./leftSide/cardsItems/index.jsx.jsx"
import CardColumn from "./rightSide/index.jsx"

const section1 = () => {
  return (
   <>
    <Title></Title>
    <div className="py-10 px-6 mx-26">
    <div className="container flex flex-row gap-14">
    <CardsItems/>
    <CardColumn/>
    </div>
</div>
    </>
  )
}

export default section1

