import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import metmatLogo from "./images/metmatlogo.enc";
import Events from "./pages/Events";
import Poster from "./pages/Poster";
import Ppt from "./pages/Ppt";
import Gnb from "./pages/Gnb";
import MetaQuest from "./pages/MetaQuest";
import Flashit from "./pages/Flashit";
import Clickzz from "./pages/Clickzz";
import JJ from "./pages/JJ";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="p-4 bg-black bg-transparent">
          <div className="flex justify-between items-center text-yellow-300 max-w-5xl mx-auto">
            <Link to="/">
              <img className="h-16 mix-blend-screen" src={metmatLogo} alt="logo" />
            </Link>
            
            <div className="flex gap-4">
              <Link className="hover:font-bold" to="/">
                Home
              </Link>
              <Link className="hover:font-bold" to="/events">
                Events
              </Link>
              <Link
                className="hover:font-bold"
                to="https://forms.gle/2vaPsavPavugWRWH7"
              >
                Register
              </Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/poster" element={<Poster />} />
          <Route path="/events/ppt" element={<Ppt />} />
          <Route path="/events/gnb" element={<Gnb />} />
          <Route path="/events/mq" element={<MetaQuest />} />
          <Route path="/events/clickzz" element={<Clickzz />} />
          <Route path="/events/flashit" element={<Flashit />} />
          <Route path="/events/jj" element={<JJ />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
