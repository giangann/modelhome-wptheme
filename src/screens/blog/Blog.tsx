import { BlogApiType } from '@/libs';
import { Box, Container, Grid } from '@mui/material';
import { useQuery } from 'react-query';
import { Outlet } from 'react-router-dom';

import { OswaldTypo } from '../../styled';
import { BlogItem } from './BlogItem';
import { BlogSidebar } from './BlogSidebar';

export const Blog = () => {
  return (
    <Container sx={{ mt: 8 }}>
      <Grid container columnSpacing={4}>
        <Outlet />
        <BlogSidebar />
      </Grid>
    </Container>
  );
};
