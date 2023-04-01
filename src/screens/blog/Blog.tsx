import { BlogApiType } from '@/libs';
import { Box, Container, Grid } from '@mui/material';
import { useQuery } from 'react-query';

import { OswaldTypo } from '../../styled';
import { BlogItem } from './BlogItem';
import { BlogSidebar } from './BlogSidebar';

export const Blog = () => {
  const { data: listBlog, isLoading: isLoading } = useQuery<BlogApiType[]>('blogs');
  return (
    <>
      {isLoading ? (
        // put a placeholder of logo or beauty animation here
        'Loading'
      ) : (
        <Container sx={{ mt: 8 }}>
          <Grid container columnSpacing={4}>
            <Grid container item xs={12} sm={7}>
              {listBlog?.map((blog, index) => (
                <Grid key={index} item xs={12}>
                  <BlogItem blog={blog} />
                </Grid>
              ))}
            </Grid>
            <BlogSidebar />
          </Grid>
        </Container>
      )}
    </>
  );
};
