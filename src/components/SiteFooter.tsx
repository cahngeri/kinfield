const SiteFooter = () => {
  return (
    <footer className="section-padding py-12 md:py-16 border-t" style={{ background: "hsl(213 75% 10%)", borderColor: "hsl(213 30% 20%)" }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <p className="font-display text-lg text-white">KINFIELD</p>
          <p className="font-body text-sm text-white/60 mt-1">
            Winning Parents. Growing Brands.
          </p>
        </div>
        <div className="font-body text-sm text-white/60 space-y-1 md:text-right">
          <a href="mailto:hello@kinfield.agency" className="block hover:text-white transition-colors">
            hello@kinfield.agency
          </a>
          <p>
            WhatsApp:{" "}
            <a
              href="https://wa.me/6285158563550?text=Hi%20Kinfield%2C%20I%E2%80%99d%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Kinfield on WhatsApp"
              className="hover:text-white transition-colors cursor-pointer"
            >
              +62 851 5856 3550
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
