
const VisaCart = () => {
  return (
    <div className="p-[100px_40px_100px_100px] h-screen bg-[#303030] mt-[8%] flex items-center justify-center">
      <div className="font-semibold flex-1">
        <h1 className="text-[#8C8C8C] text-[55px] leading-[65px]">
          Credit is the Fastest <br />
          Mobile <span className="text-white">Banking <br /> Solution.</span>
        </h1>
        <p className="text-white text-lg font-normal leading-[30px] mt-5">
          Feels Great In Low-light Mood For Your Eye Protection <br />
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing <br /> Elit, Sed Do Eiusmod Tempor Incididunt
        </p>

      
        <div className="circle-container flex items-center mt-10 cursor-pointer">
          <div className="circle w-[30px] h-[30px] rounded-full border-2 border-black flex items-center justify-center  hover:border-orange-500">
          
          </div>
          <span className="circle-text ml-2.5 text-xl text-white font-normal">All your transaction</span>
        </div>

        <div className="circle-container flex items-center mt-10 cursor-pointer">
          <div className="circle w-[30px] h-[30px] rounded-full border-2 border-black flex items-center justify-center  hover:border-orange-500">
         
          </div>
          <span className="circle-text ml-2.5 text-xl text-white font-normal">Receipts transaction</span>
        </div>

        <div className="circle-container flex items-center mt-10 cursor-pointer">
          <div className="circle w-[30px] h-[30px] rounded-full border-2 border-black flex items-center justify-center   hover:border-orange-500">
       
          </div>
          <span className="circle-text ml-2.5 text-xl text-white font-normal">Experience Smart App</span>
        </div>
      </div>  

      <div>
        <img src="/visa.png" alt="visa" className="w-4/5 h-auto ml-[60px]" />
      </div>
    </div>
  );
};

export default VisaCart;
