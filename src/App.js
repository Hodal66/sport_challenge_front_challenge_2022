import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <About />
        <Home />
        <Gallery />
        <Plans />
        <Trainers />
        <NotFound />
      </BrowserRouter>
    </div>
  );
}

export default App;
