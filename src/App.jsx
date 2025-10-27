import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
