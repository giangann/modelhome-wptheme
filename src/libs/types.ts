export type UnknownObj = Record<string, unknown>;

export type DefectivePositionType = 'top' | 'left' | 'right' | 'bottom';

export type FadeInType = 'fade-in-right' | 'fade-in-left' | 'fade-in-up' | 'fade-in-down';

export type ProjectType = {
  project_name: string;
  tag: string;
  thumb: string;
  description: string;
  slug: string;
  project_images?: string[];
};
