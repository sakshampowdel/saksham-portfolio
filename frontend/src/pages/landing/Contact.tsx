function Contact() {
  return (
    <section id="contact" className="p-10 text-xl gap-5">
      <div>
        <h2 className="font-bold text-4xl mb-6">Contact Me</h2>
        <p className="text-lg">Got a question or opportunity?</p>
        <p className="text-lg">
          You can send me a message{" "}
          <a
            href="mailto:sakshampowdel@gmail.com"
            className="text-blue-500 underline"
          >
            here
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default Contact;
