import { ArrowDownFromLine } from "lucide-react";
import MyPortrait from "../../assets/images/MyPortrait.png";

const About = () => {
  return (
    <section id="about" className="py-12 md:px-24 min-h-screen scroll-mt-24">
      <h1 className="text-6xl max-md:text-5xl font-bold text-accent text-center pb-12 text-shadow-lg">
        My Story
      </h1>
      <div className="grid grid-cols-2 gap-8 max-xl:grid-cols-1">
        <div className="py-12 max-md:px-2 md:text-xl space-y-10">
          <p>
            Hello, I'm <b className="text-accent">Saksham</b> (sock-shum)! I'm a{" "}
            <b>Software Engineer</b> with a Bachelor's of Science in{" "}
            <b>Computer Science</b>. I've been passionate about coding ever
            since I was young and have felt connected to the tech world for as
            long as I can remember. I first started developing in <b>Java</b>,
            but eventually stumbled into the world of <b>Web Development</b>.
            From grinding through plain <b>HTML/CSS</b> to now building
            applications in <b>React</b> with <b>TypeScript</b>, it's been an
            exciting journey. Thanks to my Java background, I also explored{" "}
            <b>Spring Boot</b> and paired it with <b>PostgreSQL</b> for backend
            development. More recently, I've been diving deeper into{" "}
            <b>Python</b>—especially using it for <b>Machine Learning</b>{" "}
            projects, which I've grown to love more and more.
          </p>

          <p>
            Outside of coding, I've always loved staying active and creative.
            Growing up, I spent countless hours playing basketball and soccer,
            and to this day there's nothing like the rush of a good game. Music
            is another huge part of me—I love picking up my guitar and getting
            lost in math rock, with{" "}
            <a
              className="text-blue-400 underline"
              href="https://en.wikipedia.org/wiki/Toe_(band)"
              rel="noopener noreferrer"
              target="_blank"
            >
              Toe
            </a>{" "}
            being my all-time favorite band. On the gaming side, I've sunk
            plenty of hours into Path of Exile and League of Legends, and I have
            a soft spot for MMORPGs and rhythm games. Honestly, though, what
            matters most to me is the people I'm playing with—whether it's
            sports, music, or games, I just enjoy sharing those experiences with
            others.
          </p>
        </div>
        <div className="flex max-md:px-2 justify-center align-middle py-12">
          <img
            src={MyPortrait}
            alt="Portrait"
            className="w-fit h-fit rounded-full object-cover object-center border-2 border-accent"
          />
        </div>
      </div>
      <div className="flex justify-center max-xl:hidden max-xl:invisible">
        <a href="#experience" className="hover:cursor-pointer">
          <ArrowDownFromLine className="animate-bounce h-7 w-7" />
        </a>
      </div>
    </section>
  );
};

export default About;
