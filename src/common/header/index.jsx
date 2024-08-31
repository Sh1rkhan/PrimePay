import { Link } from "react-router-dom";
import Button from "../button";

const Header = () => {
  return (
    <header className="container flex justify-between">
      <p>logo</p>

      <div className="flex gap-2">
        <Link to={"/blog"}>Blog</Link>
        <Link to={"/licenses"}>Licenses</Link>
        <Link to={"/changelog"}>Changelog</Link>
      </div>

      <Button element={"a"} href="/login">
        Login
      </Button>
    </header>
  );
};

export default Header;
