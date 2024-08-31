import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Home, Blog, Licenses } from "./pages";
import Header from "./common/header";
import Footer from "./common/footer";
import Chengelog from "./pages/Changelog";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/licenses" element={<Licenses />} />
        <Route path="/changelog" element={<Chengelog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
