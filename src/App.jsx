import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Home, Blog, Licenses, BlogSingle, NotFound, Protected } from "./pages";
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
        <Route path="/blog/:id" element={<BlogSingle />} />
        <Route path="/licenses" element={<Licenses />} />
        <Route path="/changelog" element={<Chengelog />} />
        <Route path="/protected" element={<Protected />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
