import Navbar from "./components/Navbar";
import Hero from "./pages/landing/Hero";
import About from "./pages/landing/About";
import Experience from "./pages/landing/Experience";
import Projects from "./pages/landing/Projects";
import Contact from "./pages/landing/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
