
const GetStarted = ({ imageUrl, price, discount, month, description }) => {
    return (
        <>
    <div className="w-[300px] border border-[#ddd] rounded-[30px] shadow-[13px_-10px_10px_rgba(0,_0,_0,_0.1)] mx-auto my-[40px] p-[50px] bg-[#F2F2F2]">
        <img src={imageUrl} alt="Card Image" className="w-full h-auto" />
        <div className="p-4">
          <div className="flex justify-between items-center mb-2.5">
            <span className="text-2xl font-medium text-[#3D3269] cursor-pointer line-through">{price}</span>
            <span className="text-lg text-[#3D3269] font-medium">{month}</span>
          </div>
          <span className="pl-7 text-lg font-semibold text-[#231656]">{discount}</span>
          <p className="text-lg font-normal text-[#4E4E4E] mt-4 mb-4 bg-white rounded-lg px-15 py-10 text-left leading-10 cursor-pointer hover:underline">{description}</p>
          <button className="w-full py-5 px-7 bg-[#D7D7D7] text-[#231656] border border-[#2316565b] rounded-full cursor-pointer text-base text-center mt-5 hover:bg-[#231656] hover:text-white hover:border-[#D7D7D7]">Get Started</button>
        </div>
      </div>  
      </>
    );
  };

export default GetStarted