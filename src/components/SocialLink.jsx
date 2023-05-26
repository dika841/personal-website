import { FaGithub, FaLinkedin } from "react-icons/fa";

import { GrInstagram, GrMail } from "react-icons/gr";

const SocialLink = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin className="text-2xl md:text-4xl" />
        </>
      ),
      href: "https://www.linkedin.com/in/dika-randika-2b5064263/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub className="text-2xl md:text-4xl" />
        </>
      ),
      href: "https://github.com/dika841",
    },
    {
      id: 3,
      child: (
        <>
          <GrMail className="text-2xl md:text-4xl" />
        </>
      ),
      href: "mailto:randikaa1999@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <GrInstagram className="text-2xl md:text-4xl" />
        </>
      ),
      href: "",
    },
  ];

  return (
    <div>
      <ul className="flex gap-x-3 md:gap-x-5">
        {links.map((link, idx) => (
          <li key={idx}>
            <a href={link.href}>{link.child}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLink;
