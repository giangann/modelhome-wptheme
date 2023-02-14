import { Box, Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import { ImageWithDefectiveTrianglePart, Line } from '../../components';
import { projects } from '../../constant';
import { grey, orange, ProjectType } from '../../libs';
import {
  GridCenter,
  GridCenterVertical,
  OswaldTypo,
  OswaldTypoHeaddingBanner,
  OswaldTypoHeaddingContent,
  OswaldTypoHeaddingFooter,
} from '../../styled';
import { FilterBar } from './FilterBar';
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
      <Grid container sx={{ marginY: { xs: 2, sm: 10 } }} justifyContent="center">
        <GridCenter item xs={6}>
          <Box>
            <OswaldTypo sx={{ fontSize: 14, mb: 2 }}>HỒ SƠ</OswaldTypo>
            <OswaldTypoHeaddingContent mb={3}>
              CÁC DỰ ÁN <br />
              CỦA MODEL HOME
            </OswaldTypoHeaddingContent>
            <Line width="20%" color={orange['400']}/>
          </Box>
        </GridCenter>
        <GridCenterVertical item xs={6} sx={{ p: 14 }}>
          <FilterBar />
        </GridCenterVertical>
      </Grid>
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
