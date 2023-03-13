import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { HeadingBlock } from '../../components';
import { ProjectApiType } from '../../libs';
import {
  GridCenterHorizontal, OswaldTypoHeaddingContent
} from '../../styled';
import { FilterBar } from './FilterBar';
import { ProjectItem } from './ProjectItem';

export const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { data: listProject, isLoading: isLoading } = useQuery<ProjectApiType[]>('projects');
  console.log('list project', listProject);
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
      <Grid
        container
        sx={{ marginY: { xs: 2, sm: 10 } }}
        rowSpacing={4}
        justifyContent="center"
      >
        <GridCenterHorizontal item xs={12} sm={6} sx={{ p: { xs: 2, sm: 0 } }}>
          <HeadingBlock
            subTitle="Hồ sơ"
            title={
              <OswaldTypoHeaddingContent mb={3}>
                CÁC DỰ ÁN <br />
                CỦA MODEL HOME
              </OswaldTypoHeaddingContent>
            }
          />
        </GridCenterHorizontal>
        <Grid item xs={12} sm={6} sx={{ px: { xs: 2, sm: 14 } }}>
          <FilterBar />
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 4 }}>
        {listProject?.map((project: ProjectApiType, index: any) => (
          <Grid key={index} item xs={12} sm={index === 0 ? 12 : 6}>
            <ProjectItem
              project={project}
              isLastest={!index ?? true}
              defectivePosition={
                !project.is_main ? (isLeftDefective(index) ? 'left' : 'right') : 'right'
              }
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
