import Navbar from "./components/Navbar";
import Hero from "./pages/landing/Hero";
import About from "./pages/landing/About";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
