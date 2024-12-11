import {
  ResumeLanguageExperience,
  ResumeSkillExperience,
} from "@/types/resume";

export const getSkillPercentage = (skill: ResumeSkillExperience) => {
  switch (skill) {
    case "beginner":
      return 20;
    case "junior":
      return 40;
    case "mid_level":
      return 60;
    case "senior":
      return 80;
    case "expert":
      return 100;
  }

  return 0;
};

export const getLanguagePercentage = (exp: ResumeLanguageExperience) => {
  switch (exp) {
    case "native":
      return 100;
    case "fluent":
      return 75;
    case "proficient":
      return 50;
    case "basic":
      return 25;
  }

  return 0;
};

export const splitByLineBreaks = (input: any) => {
  if (typeof input !== "string") {
    return [];
  }
  return input.split(/\r?\n/);
};

export const isValidImageUrl = (url: any): url is string => {
  if (typeof url !== "string") {
    return false;
  }

  const imageRegex = /\.(jpeg|jpg|png|gif|bmp|webp|svg)$/i; // Matches common image extensions
  const urlRegex = /^https?:\/\/[^\s/$.?#].[^\s]*$/i; // Matches valid URLs

  return urlRegex.test(url) && imageRegex.test(url);
};
