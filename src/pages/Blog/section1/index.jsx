import Button from "../../../common/button"


const section1 = () => {
  return (
   <div className="py-10 px-6 mx-26">
     <div className="container flex justify-between ">
       <left className="flex gap-3  mt-1 ">
         <span className="text-main-grey font-family:jost text-2xl font-bold">News</span>
         <span className="text-primary font-family:jost text-2xl font-bold">Articles</span>
       </left>
       <right className="flex gap-5">
       <input
            type="email"
            placeholder="Enter your email"
            className="text-gray-900 border-2 px-10 py-2 rounded-full font-sans text-lg w-full focus:outline-none"
          />
         
         <Button element="a" variant="primary">SEARCH</Button>
        
       </right>
     </div>
   </div>
  )
}

export default section1


//BUTTON - flex justify-center items-center w-1/3 px-6