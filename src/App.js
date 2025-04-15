import "./App.css";
import "@mantine/core/styles.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./component/Website/Basic/Nav";
import Home from "./component/Website/Home/Home";
import About from "./component/Website/About us/About";
import Whatwedo from "./component/Website/What we do/Whatwedo";
import Portfolio from "./component/Website/portfolios/Portfolio";
import Blog from "./component/Website/blog/Blog";
import Contact from "./component/Website/Contact us/Contact";
import Experiences from "./component/Website/Experiance/Experiences";
function App() {
  return (
    <div className="App">
      <div className="App w-full bg-gray-100 ">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/navbars" element={<Nav />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/whatwedo" element={<Whatwedo />} />
          <Route exact path="/gallery" element={<Portfolio />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/experiences" element={<Experiences />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
