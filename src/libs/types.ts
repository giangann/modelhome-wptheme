export type UnknownObj = Record<string, unknown>;

export type DefectivePositionType = 'top' | 'left' | 'right' | 'bottom';

export type ProjectType = {
  project_name: string;
  tag: string;
  thumb: string;
  description: string;
  project_images?: string[];
};
