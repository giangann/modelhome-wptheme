import { Box, Container, Grid, Stack, styled, Typography } from '@mui/material';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { OurProjectsType, ProjectApiType } from '@/libs';

import { useTranslation } from 'react-i18next';
import { BoxWithBackgroundAndLayer, HeadingBlock } from '../../components';
import {
  NUM_OF_PROJECT_SERVICE,
  STORAGE_PREFIX
} from '../../constant';
import {
  btnTextStyle,
  centerDiv,
  MontserratTypo, OrangeOutlinedBtn,
  OswaldTypo
} from '../../styled';

type FocusProjectType = ProjectApiType & { isFocus: boolean };

export const OurProjects = (props: { data: OurProjectsType }) => {
  const { data } = props;
  const { t } = useTranslation();
  const projectSummary = ['location', 'customer_name', 'square', 'finish_in'];
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

      <Grid container sx={{ marginY: 4 }} spacing={2} p={2}>
        {listProject.map((project, index) => (
          <Grid key={index} item xs={12} sm={4}>
            <BoxWithBackgroundAndLayer
              image={`${STORAGE_PREFIX}/${project.thumb}`}
              width="100%"
              height={500}
              sx={{ backgroundColor: 'black', opacity: 0.5 }}
            >
              <Box sx={{ ...centerDiv, width: '100%', height: '100%' }}>
                <Stack spacing={2}>
                  <div
                    style={{
                      cursor: 'pointer',
                      transform: project.isFocus ? 'translateY(0)' : 'translateY(50px)',
                      transition: 'all 0.5s',
                    }}
                    onClick={() => handleFocusProject(index)}
                  >
                    <ThumbTitle
                      color="white"
                      sx={{
                        opacity: project.isFocus ? 1 : 0.5,
                        transition: 'all 0.5s',
                      }}
                    >
                      {project.name}
                    </ThumbTitle>
                  </div>

                  {/* info of project */}
                  <Box
                    sx={{
                      transition: 'all 1s',
                      transform: project.isFocus ? 'translateY(0)' : 'translateY(50px)',
                      opacity: (project.isFocus as any) ? 1 : 0,
                    }}
                  >
                    <Grid container spacing={{ xs: 1, sm: 2 }}>
                      {projectSummary.map((key, index) => (
                        <Grid item xs={12} key={index}>
                          <Box>
                            <MontserratTypo
                              letterSpacing={1.5}
                              color="white"
                              textAlign="center"
                              fontWeight={600}
                            >
                              {t(`project.${key}`)}
                            </MontserratTypo>
                          </Box>
                          <Box>
                            <MontserratTypo
                              color="white"
                              textAlign="center"
                              fontSize={{ xs: 12, sm: 14 }}
                            >
                              {listProject[index]
                                ? listProject[index][key as keyof ProjectApiType]
                                : ''}
                            </MontserratTypo>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
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
