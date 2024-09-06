// const cards = () => {
//   return (
//     <div>
//       <div className="w-1/3 rounded-3xl container flex flex-col text-center">


//         <img src="./blog/card1.png" className="w-full rounded-3xl" />
//         <div className="flex justify-center">
//           <span className="bg-violet-200 w-20 rounded-xl my-6">Business</span>
//         </div>
//         <p>Great productivity apps you can download for free this week on iPhone</p>
//         <p className="my-3 border-t border-dotted border-t-neutral-300"></p>
//         <p>May 02, 2022 • Nattasha</p>
//       </div>
//     </div>
//   )
// }

// export default cards




export default function cardsContainer ({img,title,text,date,author}) {
    return (
      <div>
        <div className="w-full rounded-3xl flex flex-col text-center">
          <img src={img} className="w-full rounded-3xl" />
          <div className="flex justify-center">
            <span className="bg-violet-200 rounded-3xl m-4 py-1 px-2 inline-block">{title}</span>
          </div>
          <p className="text-2xl font-bold	">{text}</p>
          <p className="my-3 border-t border-dotted border-t-neutral-300"></p>
          <p>{date} • {author}</p>
        </div>
      </div>
    )
  }
  
