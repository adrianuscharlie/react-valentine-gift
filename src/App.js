import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Content from "./pages/Content";
import Galery from "./pages/Galery";
function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Content/>
      <Galery/>
    </div>
  );
}

export default App;
