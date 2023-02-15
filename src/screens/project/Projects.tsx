import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import { useEffect } from 'react';
import { Line } from '../../components';
import { projects } from '../../constant';
import { orange, ProjectType } from '../../libs';
import {
  GridCenter,
  GridCenterVertical,
  OswaldTypo,
  OswaldTypoHeaddingContent,
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

  useEffect(() => {
    window.scrollTo(0, 0);
    // window.location.reload();
  }, []);

  return (
    <Box>
      <Grid container sx={{ marginY: { xs: 2, sm: 10 } }} justifyContent="center">
        <GridCenter item xs={12} sm={6}>
          <Box>
            <OswaldTypo sx={{ fontSize: 14, mb: 2 }}>HỒ SƠ</OswaldTypo>
            <OswaldTypoHeaddingContent mb={3}>
              CÁC DỰ ÁN <br />
              CỦA MODEL HOME
            </OswaldTypoHeaddingContent>
            <Line width="20%" color={orange['400']} />
          </Box>
        </GridCenter>
        <GridCenterVertical item xs={12} sm={6} sx={{ p: { xs: 1, sm: 14 } }}>
          <FilterBar />
        </GridCenterVertical>
      </Grid>
      <Grid container sx={{ mt: 4 }}>
        {projects.map((project: ProjectType, index) => (
          <Grid key={index} item xs={12} sm={index === 0 ? 12 : 6}>
            <ProjectItem
              project={project}
              isLastest={!index ?? true}
              defectivePosition={
                index !== 0 ? (isLeftDefective(index) ? 'left' : 'right') : 'right'
              }
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
