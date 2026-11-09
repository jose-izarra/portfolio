export type HeadlineLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface Skill {
  name: string;
  path: string;
}

export type BackgroundPic = string;

export interface Project {
  title: string;
  description: string;
  purpose: string;
  techStack: string[];
  duration: string;
  status: {
    finished: boolean;
    message: string;
  };
  contributors: string;
  project_url: string | null;
  image_url: string;
}

export const SCREEN_SIZES = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  "2XL": 1536,
};
