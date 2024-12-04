import Icon from "../Icons";
import Button from "../button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 mx-10 mt-60 pt-4 pb-14 px-6 rounded-3xl relative">
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 w-full max-w-screen-xl px-16">
        <div className="flex h-full bg-[url('../public/common/footer-banner.png')] bg-cover bg-center rounded-3xl w-full py-9">
          <div className="flex flex-col justify-center px-6">
            <p className="text-left text-5xl font-Jost font-semibold leading-tight break-words">
              <span className="text-indigo-950">
                Take control of your personal{" "}
              </span>
              <span className="text-white">finances today</span>
            </p>
          </div>

          <div className="flex justify-center items-center w-1/2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-gray-900 px-8 py-4 rounded-full font-sans text-lg w-full focus:outline-none "
            />
          </div>

          <div className="flex justify-center items-center w-1/3 px-6">
            <Button element="a" variant="footer">
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto container mt-36">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-5 w-auto">
            <div className="flex items-end gap-1">
              <img
                src="../public/common/Icon.png"
                alt="PrimePay Icon"
                className="w-10"
              />
              <span className="text-indigo-950 font-jost text-2xl font-normal leading-9 text-left">
                PrimePay.
              </span>
            </div>
            <span className="line-clamp-3 leading-6">
              Lorem ipsum dolor sitonsecteturadipisicing elit <br />
              sed do eiusmod temporincididunt Laoreet non <br />
              sagittis aliquam bibendum.
            </span>

            <div className="flex pr-20 gap-5">
              <a href="https:\\www.instagram.com">
                <Icon icon="insta" color="#231656" size={20}></Icon>
              </a>
              <a href="https:\\www.fb.com">
                <Icon icon="fb" color="#231656" size={20}></Icon>
              </a>
              <a href="https:\\www.twitter.com">
                <Icon icon="twitter" color="#231656" size={20}></Icon>
              </a>
              <a href="https:\\www.linkedin.com">
                <Icon icon="in" color="#231656" size={20}></Icon>
              </a>
              <a href="https:\\www.youtube.com">
                <Icon icon="youtube" color="#231656" size={20}></Icon>
              </a>
            </div>
          </div>

          <div className="h-48 w-px bg-gray-300 mx-4"></div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:w-1/2">
            <div>
              <h2 className="mb-6 text-xl font-Jost text-indigo-900">Menu</h2>
              <ul className="text-gray-700 font-sans">
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
                    <span className="text-white px-1.5 text-xs bg-green-500 rounded-full self-center">
                      OFFER
                    </span>
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
              <h2 className="mb-6 text-xl font-Jost text-indigo-900">
                Utility Pages
              </h2>
              <ul className="text-gray-700 font-sans">
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
              <h2 className="mb-6 text-xl font-Jost text-indigo-900">
                Address
              </h2>
              <ul className="text-gray-700 font-sans">
                <li>
                  <p className="mb-5">
                    1700 W Blancke St, Kiev <br />
                    Port South USA, America <br />
                    <br />
                    +3255 456 789 <br />
                    mail@primepay.com
                  </p>
                </li>
              </ul>

              <Button element="a" variant="small">
                GET A QUOTE
              </Button>
            </div>
          </div>
        </div>

        <div className="sm:flex sm:items-center sm:justify-between"></div>
      </div>
    </footer>
  );
};

export default Footer;
