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

export type HomePageApiType = {
  banner: string;
  about_us: string;
  services: string;
  projects: string;
};

export type HomePageType = {
  bannerPart: {
    backgroundImg: string;
    slogan: string;
  };
  aboutPart: {
    title: string;
    subTitle: string;
    description: {
      highlight: string;
      normal: string;
    };
  };
  servicePart: {
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
  projectPart: {
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
};
