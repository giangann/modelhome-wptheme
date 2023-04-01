import { BlogApiType } from '@/libs';
import { Box, Container, Grid } from '@mui/material';
import { useQuery } from 'react-query';

import { OswaldTypo } from '../../styled';
import { BlogItem } from './BlogItem';
import { BlogSidebar } from './BlogSidebar';
export const BlogList = () => {
  const { data: listBlog, isLoading: isLoading } = useQuery<BlogApiType[]>('blogs');
  return (
    <>
      {isLoading ? (
        // put a placeholder of logo or beauty animation here
        'Loading'
      ) : (
        <Grid container item xs={12} sm={7}>
          {listBlog?.map((blog: BlogApiType, index) => (
            <Grid key={index} item xs={12}>
              <BlogItem blog={blog} isDetail={false} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};