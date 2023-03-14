import { homePage } from '@/constant';
import { HomePageApiType } from '@/libs';
import { Box } from '@mui/material';
import { useQuery } from 'react-query';

import { AboutUs } from './AboutUs';
import { Banner } from './Banner';
import { OurProjects } from './OurProjects';
import { OurServices } from './OurServices';

export const Home = () => {
  const { data: homePageData, isLoading: isLoading } =
    useQuery<HomePageApiType>('home-page');

  // const bannerData = JSON.parse(homePageData?.banner || '');
  // const aboutUsData = JSON.parse(homePageData?.about_us || '');
  // const serviceData = JSON.parse(homePageData?.services || '');
  // const projectData = JSON.parse(homePageData?.projects || '');

  return (
    <>
      {isLoading ? (
        // put a placeholder of logo or beauty animation here
        'Loading'
      ) : (
        <Box>
          <Banner data={JSON.parse(homePageData?.banner as string)} />
          <AboutUs data={JSON.parse(homePageData?.about_us as string)} />
          <OurServices data={JSON.parse(homePageData?.services as string)} />
          <OurProjects data={JSON.parse(homePageData?.projects as string)} />
        </Box>
      )}
    </>
  );
};
