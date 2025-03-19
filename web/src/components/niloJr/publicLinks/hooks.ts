import { IconType } from "react-icons";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineEnvironment,
} from "react-icons/ai";

export interface UserLinks {
  icon: IconType;
  url: string;
}

export const useHooks = () => {
  const userLinks: UserLinks[] = [
    {
      icon: AiOutlineEnvironment,
      url: process.env.NEXT_PUBLIC_LOCATION_URL ?? "",
    },
    {
      icon: AiFillMail,
      url: process.env.NEXT_PUBLIC_EMAIL_URL ?? "",
    },
    {
      icon: AiFillGithub,
      url: process.env.NEXT_PUBLIC_GITHUB_URL ?? "",
    },
    {
      icon: AiFillLinkedin,
      url: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
    },
  ];
  return {
    userLinks,
  };
};
