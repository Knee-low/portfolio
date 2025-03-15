import { useRouter } from "next/router";
import { useState } from "react";

export const useHooks = () => {
  const router = useRouter();
  const [active, setActive] = useState("about");

  const menuItems = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    // { id: "projects", label: "PROJECTS" },
  ];

  const onClickMenuItem = (id: string) => {
    router.push(`/#${id}`);
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
