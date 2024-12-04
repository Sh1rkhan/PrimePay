
export default function CardsContainer ({img,category,title,date,author}) {
    return (
      <div className="grid grid-cols-1 mb-10">
        <div className="w-full rounded-3xl grid grid-cols-1 text-center">
          <img src={img} className="w-full rounded-3xl" />
          <div className="flex justify-center">
            <span className="bg-violet-200 rounded-3xl m-4 py-1 px-2 inline-block">{category}</span>
          </div>
          <p className="text-2xl font-bold">{title}</p>
          <p className="my-3 border-t border-dotted border-t-neutral-300"></p>
          <p>{date} • {author}</p>
        </div>
      </div>
    )
  }
  
