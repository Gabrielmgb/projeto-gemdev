import "bootstrap";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Statement from "./components/Statement";
import Details from "./components/Details";
// import Lightbox from "./components/Lightbox";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Invitation from "./components/Invitation";
import Statistics from "./components/Statistics";
import About from "./components/About";
import Features from "./components/Features";
import Details2 from "./components/Details2";

function App() {
  return (
    <div data-spy="scroll" data-target=".fixed-top">
      
      {/* <div className="container mt-5">
      <h1 className="text-center text-primary">Olá, Bootstrap com Vite + React!</h1>
      <button className="btn btn-success">Clique aqui</button>
    </div> */}
      <Navbar />
      <Header />
      <Statement />
      <Details />
      <Details2 />
      <Features />
      <About />
      <Statistics />
      <Invitation />
      <Contact />
      <Footer /> 

    </div>
  );
}

export default App;
