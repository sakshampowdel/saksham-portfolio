import Navbar from "./components/Navbar";
import Hero from "./pages/landing/Hero";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
    </div>
  );
}
