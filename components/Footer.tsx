import Link from "next/link";

const links = [
  {
    title: "Contact Us",
    href: "/Contact",
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    title: "Terms & Conditions",
    href: "/terms-and-privacy",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="wrapper py-10 sm:py-[78px]">
        <div className="flex flex-col lg:flex-row max-lg:gap-6 max-sm:gap-4 justify-between items-center">
          <p className="lg:order-1 order-3 text-xs sm:text-sm xl:text-base font-medium font-inter">
            Vendibly © 2025
          </p>
          <div className="lg:order-2 order-2">
            <ul className="flex items-center">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="px-2 sm:px-4.5 border-r-2 border-[#DFE8F6] last:border-0"
                >
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm xl:text-base font-inter text-foreground hover:text-app-orange transition-colors duration-300 ease-in-out"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="lg:order-3 order-1 text-xs sm:text-sm xl:text-base font-medium font-inter">
            Built for creators and teams that want peace of mind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
