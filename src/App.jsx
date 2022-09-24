import NavBar from "./components/NavBar";
import Social from "./components/Social";
import Email from "./components/Email";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="h-screen w-screen">
      <NavBar>
        <Email />
        <Social />
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
        <Footer />
      </NavBar>
    </div>
  );
};
export default App;
