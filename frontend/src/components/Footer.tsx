const Footer = () => {
  return (
    <footer className="bg-background border-t-2 border-muted pt-6 text-center text-sm text-muted">
      <p>
        © {new Date().getFullYear()} Saksham Powdel • Built with React &
        Tailwind
      </p>
      <a href="#hero" className="block mt-4 text-accent hover:underline pb-4">
        Back to Top
      </a>
      <div className="bg-accent flex min-h-1.5"></div>
    </footer>
  );
};

export default Footer;
