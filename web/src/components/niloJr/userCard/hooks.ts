import { useState } from "react";

export const useHooks = () => {
  const [active, setActive] = useState("about");

  const menuItems = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
  ];

  const onClickMenuItem = (id: string) => {
    setActive(id);
  };

  return {
    active,
    setActive,
    menuItems,
    isShowAvatar: true,
    onClickMenuItem,
    userName: "Nilo Castillano Jr",
    userPosition: "Full-Stack Web Developer",
    userDescription:
      "I build accessible, pixel-perfect digital experiences for the web.",
  };
};
