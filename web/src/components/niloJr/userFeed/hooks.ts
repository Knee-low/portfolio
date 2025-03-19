import { AboutMeDescriptions, AboutMeHighlights } from "@/constants";
import { useEffect, useRef } from "react";

export const useHooks = () => {
  const hash =
    typeof window !== "undefined" ? window.location.hash.replace("#", "") : "";
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);

  const aboutInfos = [
    {
      description: AboutMeDescriptions.description_1,
      highLights: AboutMeHighlights.highlight_1,
    },
    {
      description: AboutMeDescriptions.description_2,
      highLights: AboutMeHighlights.highlight_2,
    },
    {
      description: AboutMeDescriptions.description_3,
      highLights: AboutMeHighlights.highlight_3,
    },
  ];
  const experienceInfos = [
    {
      company: "Sun Asterisk Inc.",
      position: "Full-Stack Web Developer",
      description:
        "Developed reusable code to optimize costs and enhance project scalability. Contributed to backend development and API collaboration. Assisted in pre-project analysis and technical assessments for user-friendly interfaces.",
      tags: [
        "Material UI",
        "TypeScript",
        "React",
        "NestJS",
        "NextJS",
        "Prisma",
        "GIT",
        "Jest",
        "Docker",
        "PHP",
        "LARAVEL",
        "Bootstrap",
        "ASP.NET",
        "GraphQL",
        "CI/CD",
      ],
      startYear: "2021",
      url: "https://en.sun-asterisk.com/about/",
    },
    {
      company: "Afaridan Holdings Ltd.",
      position: "Freelance: Full-Stack Web Developer",
      description:
        "Managed website appearance and API integrations for Leadbyte and Meta’s Conversion API. Focused on feature-driven development with continuous client feedback until deployment.",
      tags: ["VueJS", "JavaScript", "React", "BitBucket", "DigitalOcean"],
      startYear: "2023",
      endYear: "2024",
      url: "https://find-and-update.company-information.service.gov.uk/company/11300022",
    },
  ];

  useEffect(() => {
    if (hash.includes("about") && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (hash.includes("experience") && experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return {
    aboutRef,
    experienceRef,
    aboutInfos,
    experienceInfos,
  };
};
