import { createElement } from "react";

const Button = ({ element, variant = "primary", children, ...props }) => {
  let className = "text-md rounded-full cursor-pointer w-max ";

  switch (variant) {
    case "primary":
      className += "px-6 py-3 bg-primary text-white hover:bg-secondary";
      break;
     
    case "secondary":
      className += "px-6 py-3 bg-main-grey text-primary hover:bg-primary";
      break;
      case "footer":
        className += "px-12 py-4 bg-primary text-white hover:bg-secondary";
        break;
    case "small":
      className += "px-5 py-2.5 bg-secondary text-white hover:bg-primary";
      break;
  }

  const newElement = createElement(
    element,
    {
      className,
      ...props,
    },
    children
  );

  return newElement;
};

export default Button;
