import { OurProjectsType } from '@/libs';
import { Box, Container, Grid, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { HeadingBlock } from '../../components';
import { IMAGE_FOLDER_PATH } from '../../constant';
import {
  btnTextStyle,
  MontserratTypo,
  OrangeOutlinedBtn,
  OswaldTypo,
  OswaldTypoHeaddingContent,
} from '../../styled';
export const OurProjects = (props: { data: OurProjectsType }) => {
  const { data } = props;
  console.log('data projects', data);
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
