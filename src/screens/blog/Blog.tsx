import { Box, Container, Grid } from '@mui/material';
import { OswaldTypo } from '../../styled';
import { BlogItem } from './BlogItem';
import { BlogSidebar } from './BlogSidebar';

export const Blog = () => {
  return (
    <Container sx={{ mt: 8 }}>
      <Grid container columnSpacing={4}>
        <Grid container item xs={12} sm={7}>
          {[1, 2, 3].map((item, index) => (
            <Grid key={index} item xs={12}>
              <BlogItem />
            </Grid>
          ))}
        </Grid>
        <BlogSidebar />
      </Grid>
    </Container>
  );
};
