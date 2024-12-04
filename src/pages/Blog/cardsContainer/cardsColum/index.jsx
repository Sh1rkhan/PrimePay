const cardColumn = ({img,category,title,date,author}) => {
    return (
       <>
    <div className="flex flex-col gap-3 mb-4">
    <div className="rounded-3xl flex gap-7 ">
        <img src={img} className="w-44 h-44 rounded-3xl" />
        <div className="flex flex-col w-3/5 items-start">
          <span className="bg-violet-200 rounded-3xl my-4 py-1 px-2 inline-block">{category}</span>
          <p className="text-xl font-bold">{title}</p>
          <p className="my-4 border-t w-full border-dotted borer-t-neutral-400"></p>
          <p className="text-base">{date} • {author}</p>
        </div>
      </div>
     </div>
      
      </>
        
    )
}
export default cardColumn