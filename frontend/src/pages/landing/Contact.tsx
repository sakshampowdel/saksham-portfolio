import { FileText, Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Contact = () => {
  return (
    <section
      id="contact"
      className="p-12 flex flex-col justify-center min-h-screen"
    >
      <h1 className="text-6xl max-md:text-5xl font-bold text-accent text-center pb-12">
        Contact Me!
      </h1>
      <div className="flex flex-wrap gap-10 justify-center">
        <a href="mailto:sakshampowdel@gmail.com">
          <div className="flex flex-col items-center space-y-2">
            <Mail className="h-10 w-10" />
            <h1>My Email</h1>
          </div>
        </a>

        <a
          href="https://github.com/sakshampowdel/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex flex-col items-center space-y-2">
            <SiGithub className="h-10 w-10" />
            <h1>My GitHub</h1>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/sakshampowdel/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="flex flex-col items-center space-y-2">
            <SiLinkedin className="h-10 w-10" />
            <h1>My LinkedIn</h1>
          </div>
        </a>

        <a href="/resume.pdf" rel="noopener noreferrer" target="_blank">
          <div className="flex flex-col items-center space-y-2">
            <FileText className="h-10 w-10" />
            <h1>My Resume</h1>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
