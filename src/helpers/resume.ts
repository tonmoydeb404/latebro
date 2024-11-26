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
