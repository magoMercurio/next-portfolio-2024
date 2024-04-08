import Link from "next/link";
import { SocialLinks } from "../SocialLinks";

const navbarLinks = [
  { label: "inicio", href: "/", ariaLabel: "inicio" },
  { label: "sobre mi", href: "/about", ariaLabel: "sobre mi" },
  { label: "proyectos", href: "/proyectos", ariaLabel: "proyectos" },
];

export const Footer = () => {
  return (
    <footer className="mt-auto mb-8 flex flex-row items-center justify-between">
      <p className="my-auto text-xs">
        <span>Copyright &copy; </span> {new Date().getFullYear()} Raul Davila
      </p>
      <nav className="flex flex-row my-auto gap-x-2 sm:gap-x-0 sm:divide-x">
        {navbarLinks.map(({ href, label, ariaLabel }) => (
          <p key={label} className="">
            <Link className="footerLink" href={href} aria-label={ariaLabel}>
              {label}
            </Link>
          </p>
        ))}
      </nav>
    </footer>
  );
};
