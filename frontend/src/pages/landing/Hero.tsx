import { ArrowDownFromLine } from "lucide-react";
import { useEffect, useState } from "react";

const occupations = [
  "Software Engineer",
  "Full-Stack Developer",
  "Data Analyst",
  "ML Engineer",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (index === occupations.length) return;

    // typing speed
    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => (isDeleting ? prev - 1 : prev + 1));

        // Word complete
        if (!isDeleting && subIndex === occupations[index].length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }

        // Word deleted completely
        if (isDeleting && subIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % occupations.length);
        }
      },
      isDeleting ? 50 : 100
    ); // faster when deleting

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  return (
    <section id="hero" className="p-6 flex justify-center min-h-screen">
      <div className="flex flex-col text-3xl font-light items-center">
        <h2 className="text-6xl max-md:text-4xl text-center">Hi! I'm</h2>
        <h1 className="text-9xl max-md:text-6xl text-accent font-bold">
          Saksham
        </h1>
        <h2>
          {occupations[index].substring(0, subIndex)}
          <span className="animate-pulse font-bold">_</span>
        </h2>
        <div className="py-12 text-2xl text-center">
          I design and build scalable web applications with clean, maintainable
          code.
        </div>
        <div className="pt-14">
          <a href="#about" className="hover:cursor-pointer">
            <ArrowDownFromLine className="animate-bounce h-7 w-7" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
