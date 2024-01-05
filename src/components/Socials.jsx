import React from "react";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

const Socials = ({ className = "" }) => {
  const iconStyles = {
    size: 25,
    className:
      " text-DarkBlueishBlack dark:text-LightLavender hover:scale-110 duration-200 hover:text-RoyalBlue dark:hover:text-Turquoise",
  };

  const icons = [
    {
      icon: <BsGithub {...iconStyles} />,
      path: "https://github.com/KamalJoshi-web?tab=repositories",
    },
    {
      icon: <BsLinkedin {...iconStyles} />,
      path: "https://www.linkedin.com/in/kamal-joshi-a43738249/",
    },
    {
      icon: <BsYoutube {...iconStyles} />,
      path: "https://www.youtube.com/@ReactLearnerWeb",
    },
  ];

  return (
    <ul className={`flex gap-4 ${className}`}>
      {icons.map((item, index) => (
        <li key={index}>
          <a href={item.path} target="_blank">
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
