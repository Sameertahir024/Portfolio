import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/#Projects" element={<Projects />} />
          <Route path="/#Skills" element={<Skills />} />
          <Route path="/#Services" element={<Services />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
