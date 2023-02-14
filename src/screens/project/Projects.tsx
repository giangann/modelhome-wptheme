import { Box, Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import { ImageWithDefectiveTrianglePart } from '../../components';
import { projects } from '../../constant';
import { ProjectType } from '../../libs';
import { OswaldTypo } from '../../styled';
import { ProjectItem } from './ProjectItem';

export const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const isLeftDefective = (index: number) => {
    // in mobile
    if (isMobile) {
      if ((index - 1) % 2 === 0) {
        return false;
      }
      return true;
    }

    // in desktop
    // filter index is 1,2...5,6...9,10... and 3,4...7,8...11,12...
    if (!isMobile) {
      if ((index - 1) % 4 < 2) {
        return false;
      }
      return true;
    }
  };

  return (
    <Box>
      <OswaldTypo>PROJECTS</OswaldTypo>
      <Grid container sx={{ mt: 4 }}>
        {projects.map((project: ProjectType, index) =>
          index === 0 ? (
            <Grid item xs={12}>
              <ProjectItem
                thumb={project.thumb}
                tag={project.tag}
                project_name={project.project_name}
                description={project.description}
                isLastest={true}
                defectivePosition="right"
              />
            </Grid>
          ) : (
            <Grid item xs={12} sm={6}>
              <ProjectItem
                thumb={project.thumb}
                tag={project.tag}
                project_name={project.project_name}
                description={project.description}
                defectivePosition={isLeftDefective(index) ? 'left' : 'right'}
              />{' '}
            </Grid>
          ),
        )}
      </Grid>
    </Box>
  );
};
