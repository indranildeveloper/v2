import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";

const Social = () => {
  const socialLinks = [
    {
      id: 1,
      link: "https://github.com/indranildeveloper",
      icon: <FiGithub />,
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/indranildeveloper/",
      icon: <FiLinkedin />,
    },
    {
      id: 3,
      link: "https://www.instagram.com/indranil__halder/",
      icon: <FiInstagram />,
    },
    {
      id: 4,
      link: "https://twitter.com/indranilcoder",
      icon: <FiTwitter />,
    },
  ];

  return (
    <div className="fixed hidden lg:flex items-center -bottom-5 -left-72 z-50 rotate-90 origin-bottom-right">
      {socialLinks.map((socialItem) => (
        <a
          key={socialItem.id}
          href={socialItem.link}
          className="-rotate-90 text-xl mr-10 link-hover link link-primary"
          target="_blank"
        >
          {socialItem.icon}
        </a>
      ))}

      <div className="h-0.5 w-40 bg-base-content"></div>
    </div>
  );
};
export default Social;
