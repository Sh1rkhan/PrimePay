import { useLocation } from "react-router-dom";

const Banner = () => {
  const location = useLocation();
  const path = location.pathname.slice(1);
  let bg = "";

  switch (path) {
    case "blog":
      bg = "bg-blog-banner";
      break;
    case "licenses":
      bg = "bg-licenses-banner";
      break;
    case "changelog":
      bg = "bg-changelog-banner";
      break;
  
  }

  return (
    <div className="container">
      <div
        className={`h-[33vh] ${bg} text-primary capitalize rounded-3xl flex items-center justify-center`}
      >
        {path}
      </div>
    </div>
  );
};

export default Banner;
