import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
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
    </div>
  );
}

export default App;
