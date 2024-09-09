const cardColumn = () => {
    return (
       <div>
      <div className="rounded-3xl flex gap-7 ">
        <img src="./blog/smallCards/cardSmall1.png" className="w-48 h-48 rounded-3xl" />
        <div className="flex flex-col w-3/5 items-start">
          <span className="bg-violet-200 rounded-3xl my-4 py-1 px-2 inline-block">Business</span>
          <p className="text-xl font-bold">App X is now available on12 your wrist: Download watchOS...</p>
          <p className="my-4 border-t w-full border-dotted border-t-neutral-400"></p>
          <p className="text-base">May 02, 2022 • Nattasha</p>
        </div>
      </div>

      <div className="rounded-3xl flex gap-7 ">
        <img src="./blog/smallCards/cardSmall1.png" className="w-48 h-48 rounded-3xl" />
        <div className="flex flex-col w-3/5 items-start">
          <span className="bg-violet-200 rounded-3xl my-4 py-1 px-2 inline-block">Business</span>
          <p className="text-xl font-bold">App X is now available on your wrist: Download watchOS...</p>
          <p className="my-4 border-t w-full border-dotted border-t-neutral-400"></p>
          <p className="text-base">May 02, 2022 • Nattasha</p>
        </div>
      </div>
      </div>
    
    
        
    )
}
export default cardColumn