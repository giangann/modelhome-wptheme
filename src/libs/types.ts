export type UnknownObj = Record<string, unknown>;

export type DefectivePositionType = 'top' | 'left' | 'right' | 'bottom';

export type FadeInType = 'fade-in-right' | 'fade-in-left' | 'fade-in-up' | 'fade-in-down';

export type HomePageApiType = {
  banner: string;
  about_us: string;
  services: string;
  projects: string;
};

export type BannerType = {
  backgroundImg: string;
  slogan: string;
};
export type AboutUsType = {
  title: string;
  subTitle: string;
  description: {
    highlight: string;
    normal: string;
  };
};

export type OurServicesType = {
  serviceProvide: [
    {
      image: string;
      link: string;
    },
    {
      image: string;
      link: string;
    },
    {
      image: string;
      link: string;
    },
  ];
  leftCard: {
    title: string;
    subTitle: string;
    description: string;
  };
  rightCard: {
    title: string;
    subTitle: string;
    description: string;
  };
};

export type OurProjectsType = {
  title: string;
  subTitle: string;
  description: string;
  // 6 main project
  mainProject: [
    {
      image: string;
      link: string;
    },
    {
      image: string;
      link: string;
    },
    {
      image: string;
      link: string;
    },
    {
      image: string;
      link: string;
    },
    {
      image: string;
      link: string;
    },
    {
      image: string;
      link: string;
    },
  ];
};
export type HomePageType = {
  bannerPart: BannerType;
  aboutPart: AboutUsType;
  servicePart: OurServicesType;
  projectPart: OurProjectsType;
};
export type ProjectApiType = {
  thumb: string;
  name: string;
  summary: string;
  slug: string;

  location: string;
  finish_in: string;
  customer_name: string;
  square: string;

  is_main?: boolean;
  content?: string;

  post_id?: number;
};

export type ProjectType = {
  project_name: string;
  tag: string;
  thumb: string;
  description: string;
  slug: string;
  project_images?: string[];
};

export type PostType = {
  postable_type: string;
  postable_id: number;
  content: string;
  id: number;
};
