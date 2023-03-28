import { Box } from '@mui/material';
import { useQuery } from 'react-query';

import { HomePageApiType, PostType } from '@/libs';

import { postsAtom } from '@/libs/atom/data';
import { useSetAtom } from 'jotai';
import { AboutUs } from './AboutUs';
import { Banner } from './Banner';
import { OurProjects } from './OurProjects';
import { OurServices } from './OurServices';

export const Home = () => {
  const setPostsAtom = useSetAtom(postsAtom);
  const { data: listPostData, isLoading: isPostLoading } = useQuery<PostType[]>('posts', {
    onSuccess: (data) => {
      let newPostData: { [key: number]: PostType } = {};

      data.forEach((value: PostType) => {
        newPostData[value.id] = value;
      });

      setPostsAtom(newPostData);
    },
  });
  const { data: homePageData, isLoading: isLoading } =
    useQuery<HomePageApiType>('home-page');

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
