import { Box, Container, Grid, Stack, styled, Typography } from '@mui/material';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { OurProjectsType, ProjectApiType } from '@/libs';

import { BoxWithBackgroundAndLayer, HeadingBlock } from '../../components';
import {
  IMAGE_FOLDER_PATH,
  NUM_OF_PROJECT_SERVICE,
  STORAGE_PREFIX,
} from '../../constant';
import {
  btnTextStyle,
  centerDiv,
  MontserratTypo,
  MulishTypo,
  OrangeOutlinedBtn,
  OswaldTypo,
  OswaldTypoHeaddingContent,
} from '../../styled';

type FocusProjectType = ProjectApiType & { isFocus: boolean };

export const OurProjects = (props: { data: OurProjectsType }) => {
  const { data } = props;
  const [listProject, setListProject] = useState<FocusProjectType[]>([]);
  useQuery<ProjectApiType[]>('projects', {
    onSuccess: (project) => {
      const tempProject = project
        .map((project, index) => {
          return {
            ...project,
            isFocus: false,
          };
        })
        .slice(0, NUM_OF_PROJECT_SERVICE);
      setListProject(tempProject);
    },
  });

  const handleFocusProject = (id: number) => {
    const tempProject = listProject.map((project, index) => {
      return index === id
        ? {
            ...project,
            isFocus: true,
          }
        : {
            ...project,
            isFocus: false,
          };
    });
    setListProject(tempProject);
  };

  const navigate = useNavigate();
  return (
    <Box sx={{ zIndex: 6, position: 'relative' }}>
      <Container sx={{ marginTop: 12 }}>
        <Grid container columnSpacing={12}>
          <Grid item xs={12} sm={5} mb={{ xs: 2.5, sm: 'none' }}>
            <HeadingBlock subTitle={data.subTitle} title={data.title} />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Stack spacing={2}>
              <MontserratTypo sx={{ fontSize: 14, fontWeight: 300, lineHeight: '30px' }}>
                {data.description}
              </MontserratTypo>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      {/* <Grid container sx={{ marginY: 4 }} spacing={2} p={2}>
        {[1, 2, 3, 4, 5, 6].map((thumb, index) => (
          <Grid key={index} item xs={12} sm={4}>
            <Box
              component="img"
              src={`${IMAGE_FOLDER_PATH}/main-projects/${index + 1}.jpg`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            />
          </Grid>
        ))}
      </Grid> */}

      <Grid container sx={{ marginY: 4 }} spacing={2} p={2}>
        {listProject.map((project, index) => (
          <Grid key={index} item xs={12} sm={4}>
            {/* <Box
              component="img"
              src={`${STORAGE_PREFIX}/${project.thumb}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            /> */}
            <BoxWithBackgroundAndLayer
              image={`${STORAGE_PREFIX}/${project.thumb}`}
              width="100%"
              height={500}
              sx={{ backgroundColor: 'black', opacity: 0.5 }}
            >
              <Box sx={{ ...centerDiv, width: '100%', height: '100%' }}>
                <Stack spacing={2}>
                  <div
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleFocusProject(index)}
                  >
                    <ThumbTitle
                      color="white"
                      sx={{
                        opacity: project.isFocus ? 1 : 0.5,
                      }}
                    >
                      {project.name}
                    </ThumbTitle>
                  </div>

                  {/* info of project */}
                  <Box
                    sx={{
                      transition: 'all 0.5s',
                      opacity: (project.isFocus as any) ? 1 : 0,
                    }}
                  >
                    <MulishTypo color="white">{project.location}</MulishTypo>
                    <MulishTypo color="white">{project.customer_name}</MulishTypo>
                    <MulishTypo color="white">{project.square}</MulishTypo>
                  </Box>
                </Stack>
              </Box>
            </BoxWithBackgroundAndLayer>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
        <OrangeOutlinedBtn
          onClick={() => navigate('/project')}
          sx={{ padding: '16px 48px', margin: 'auto' }}
        >
          <OswaldTypo sx={{ ...btnTextStyle }}>Xem thêm</OswaldTypo>
        </OrangeOutlinedBtn>
      </Box>
    </Box>
  );
};

const ThumbTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Mulish',
  fontSize: 24,
  fontWeight: 700,
  color: 'white',
  textAlign: 'center',
  textTransform: 'uppercase',
  [theme.breakpoints.down('sm')]: {
    fontSize: 18,
  },
}));
