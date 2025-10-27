import About from "./components/About";
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
    </div>
  );
}

export default App;
