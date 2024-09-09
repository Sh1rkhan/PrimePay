import Icon from "../Icons";
import Button from "../button";
import { Link } from "react-router-dom";


const Footer = () => {
  return <footer>
    <div className="container">

      <div className="bg-gray-100 mt-60 pt-4 pb-14 px-6 rounded-3xl relative">

        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 w-full px-8 py-8">
          <div className="xl:flex h-full bg-[url('../public/common/footer-banner.png')] bg-cover bg-center rounded-3xl p-12 w-full">

            <div className="flex flex-col justify-center px-6">
    <p className="text-left text-5xl font-Jost font-semibold leading-tight break-words">
        <span className="text-indigo-950">Take control of your personal </span>
        <span className="text-white">finances today</span>
      </p>
    </div><div className="xl:flex justify-center items-center">
   
    <div className="xl:flex justify-center items-center">
    <div className="flex justify-center items-center w-[347px] sm:w-full sm:my-[20px] md:my-[20px]">
      <input
        type="email"
        placeholder="Enter your email"
        className="bg-white text-gray-900 px-8 py-4 rounded-full font-sans text-lg w-full focus:outline-none "
      />

    </div>
    <div className="w-1/3 xl:mx-[10px] sm:my-[30px]">
    <Button element="a" variant="footer">SUBSCRIBE</Button>
    </div>
    </div>

    </div>

          </div>
        </div>


        <div className="container mt-36">
          <div className="xl:flex justify-between">

            <div className="w-auto sm:pt-[50px]">
              <div className="flex items-end gap-1 sm:my-5">
                <img src="/public/common/Icon.png" alt="PrimePay Icon" className="w-10" />
                <span className="text-primary font-jost text-[30px] font-semibold leading-[38.91px] text-left">
                  PrimePay.
                </span>
              </div>
              <span className="text-[20px] text-dark-liver line-clamp-3 leading-8">
                Lorem ipsum dolor sitonsecteturadipisicing elit   <br />
                sed do eiusmod temporincididunt Laoreet non <br />
                sagittis aliquam bibendum.
              </span>

              <div className="flex pr-20 gap-5 sm:my-[20px]">
                <a href="https:\\www.instagram.com"><Icon icon="insta" color="#231656" size={20} ></Icon></a>
                <a href="https:\\www.fb.com"><Icon icon="fb" color="#231656" size={20} ></Icon></a>
                <a href="https:\\www.twitter.com"><Icon icon="twitter" color="#231656" size={20} ></Icon></a>
                <a href="https:\\www.linkedin.com"><Icon icon="in" color="#231656" size={20} ></Icon></a>
                <a href="https:\\www.youtube.com"><Icon icon="youtube" color="#231656" size={20} ></Icon></a>

              </div>
            </div>

            <div className="h-[253px] w-px bg-gray-300 mx-4 sm:hidden md:hidden"></div>

            <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1">
              <div>
                <h2 className="mb-5 text-[30px] font-medium text-minsk font-Jos">
                  Menu
                </h2>
                <ul className="text-dark-liver text-[20px] font-sans font-normal leading-[39.7px]">
                  <li>
                    <a href="#" className="hover:underline">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Features
                    </a>
                  </li>
                  <li>
                    <div className="flex align-baseline gap-2">
                      <a href="#" className="hover:underline">
                        Pricing
                      </a>
                      <span className="text-white px-1.5 text-xs bg-green-500 rounded-full self-center">OFFER</span>
                    </div>
                  </li>
                  <li>
                    <Link to={"/blog"} className="hover:underline">
                      Blog
                    </Link>
                  </li> 
                  <li>
                    <a href="#" className="hover:underline">
                      How it works
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-5 text-[30px] text-minsk font-medium font-Jost sm:mt-6">
                  Utility Pages
                </h2>
                <ul className="text-dark-liver text-[20px] font-sans font-normal leading-[39.7px]">
                  <li>
                    <Link to={"/protected"} className="hover:underline">
                      Password Protected
                    </Link>
                  </li>

                  <li>
                    <Link to={"/licenses"} className="hover:underline">
                      Licenses
                    </Link>
                  </li>
                  <li>
                    <Link to={"/changelog"} className="hover:underline">
                      Changelog
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-5 text-[30px] font-medium text-minsk font-Jos sm:mt-6">
                  Address
                </h2>
                <ul className="text-dark-liver text-[20px] font-sans font-normal leading-[39.7px]">
                  <li>
                    <p className="mb-5">1700 W Blancke St, Kiev <br />
                      Port South USA, America <br /><br />
                      <a href="tel:+3255 456 789">+3255 456 789</a> <br />
                      <a href="mailto:mail@primepay.com">mail@primepay.com</a>
                    </p>
                  </li>
                </ul>

                <Button element="a" variant="small">GET A QUOTE</Button>
              </div>
            </div>

          </div>

          <div className="sm:flex sm:items-center sm:justify-between">

          </div>
        </div>
      </div>
      <div className="footer-copyright text-[20px] text-center my-[10px] leading-[39.7px]">
        <p className="text-dark-liver font-normal">Copyright © <span className="text-dark-charcoal font-bold">Primarily</span></p>
      </div>
    </div>
  </footer>


};

export default Footer;
