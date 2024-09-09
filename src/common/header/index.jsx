import { Link } from "react-router-dom";
import Button from "../button";

const Header = () => {
  return (
   <header className=" py-10 px-6 mx-26">
     <div className="container flex flex-wrap justify-between">
        
      <Link to={"/"} className="flex items-end gap-1">
          <img src="../public/common/Icon.png" alt="PrimePay Icon" className="w-10" />
          <span className="text-indigo-950 font-jost text-2xl font-normal leading-9 text-left ">
            PrimePay.
          </span>
      </Link>

      <div className="flex flex-wrap gap-5 font-inter text-lg font-bold leading-7 mt-3 ml-20 ">
          <Link to={"/"} className="text-indigo-950 hover:text-secondary">Home</Link>
          <Link to={"/blog"} className="text-indigo-950 hover:text-secondary ">Blog</Link>
          <Link to={"/licenses"} className="text-indigo-950 hover:text-secondary">Licenses</Link>
          <Link to={"/changelog"} className="text-indigo-950 hover:text-secondary">Changelog</Link>
          <Link to={"/protected"} className="text-indigo-950 hover:text-secondary">Protected</Link>
      </div>

      <Button element={"a"} href="/login">
         Login
      </Button>
     </div>
   </header>
  );
};

export default Header;
