import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  CvIcon,
} from "@/assets/icons/Icons";

const links = [
  {
    name: "Github",
    link: "/",
    icon: <GithubIcon className="w-5 h-5" />,
  },
  {
    name: "Linkedin",
    link: "/",
    icon: <LinkedinIcon className="w-5 h-5" />,
  },
  {
    name: "Mail",
    link: "/",
    icon: <MailIcon className="w-5 h-5" />,
  },
  {
    name: "Cv",
    link: "/",
    icon: <CvIcon className="w-5 h-5" />,
  },
];

export const SocialLinks = () => {
  return (
    <div className="flex flex-wrap items-end gap-x-4 mt-2">
      <ul className="flex flex-wrap flex-1 items-center gap-x-2 sm:flex-initial">
        {links.map(({ name, link, icon }) => (
          <li key={name} className="flex">
            <a
              className="inline-block p-1 sm:hover:accent"
              href={link}
              target="_blank"
              rel={`noopener noreferrer`}
              title={name}
            >
              {icon}
              <span className="sr-only">{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
