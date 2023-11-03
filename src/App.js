import NavBar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

const App = () =>
{
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <About/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;