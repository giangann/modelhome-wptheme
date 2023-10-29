import { Box, Container, Grid } from '@mui/material';
import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';

import { BlogApiType } from '@/libs';

import { OswaldTypo } from '../../styled';
import { BlogItem } from './BlogItem';
import { BlogSidebar } from './BlogSidebar';
export const BlogList = () => {
  const { listBlog, isLoading } =
    useOutletContext<{ listBlog: BlogApiType[]; isLoading: boolean }>();
  return (
    <>
      {isLoading ? (
        // put a placeholder of logo or beauty animation here
        'Loading'
      ) : (
        <Grid container item xs={12} sm={7}>
          {listBlog?.map((blog: BlogApiType, index: number) => (
            <Grid key={index} item xs={12}>
              <BlogItem blog={blog} isDetail={false} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
