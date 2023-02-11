import { Box, Container, Grid } from '@mui/material';
import { ImageWithDefectiveTrianglePart } from '../../components';
import { OswaldTypo } from '../../styled';

export const Projects = () => {
  return (
    <Container>
      <OswaldTypo>PROJECTS</OswaldTypo>
      <Grid container sx={{ mt: 4 }}>
        <Grid item xs={3}>
          <ImageWithDefectiveTrianglePart />
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </Container>
  );
};
