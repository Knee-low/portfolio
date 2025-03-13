import { AboutMeDescriptions, AboutMeHighlights } from "@/constants";

export const useHooks = () => {
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
      company: "testComp",
      position: "testPos",
      description: "testDesc",
      tags: ["tag1", "tag2"],
      startYear: "2021",
      endYear: "2025",
    },
    {
      company: "testComp",
      position: "testPos",
      description: "testDesc",
      tags: ["tag1", "tag2"],
      startYear: "2021",
      endYear: "2025",
    },
  ];
  return {
    aboutInfos,
    experienceInfos,
  };
};
