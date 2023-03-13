import { Box, Container, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { Line } from '../../components';
import { FadeInSection } from '../../components/FadeInSection';
import { convertSlugToName } from '../../constant';
import { grey, orange, ProjectApiType } from '../../libs';
import {
  GridCenter,
  MontserratTypo,
  OswaldTypo,
  OswaldTypoHeaddingContent,
} from '../../styled';

export const ProjectDetail = () => {
  const params = useParams();
  const { t } = useTranslation();

  const projectName = convertSlugToName(params.slug);

  const testImage =
    'https://measured.ca/wp-content/uploads/1709-RiftHouse-Web-RearSquareDay-PhotographerEmaPeter.jpg';

  const projectSummary = ['location', 'customer_name', 'square', 'finish_in'];

  const { data: projectData, isLoading: isLoading } = useQuery<ProjectApiType>(
    `projects/get-by-slug/${params.slug}`,
  );
  console.log('projectData', projectData);
  const img1 = 'https://zikzakarchitects.com/hwp/wp-content/uploads/2022/12/33-2.jpg';
  const img2 =
    'https://measured.ca/wp-content/uploads/1508-CubeHouse-Web-Rear-Entry-Square-Photographer-Ema-Peter.jpg';
  const img3 =
    'https://measured.ca/wp-content/uploads/1515-ShiftHouse-Web-Front-PhotographerEmaPeter.jpg';
  const img4 =
    'https://measured.ca/wp-content/uploads/1614-LagoonHouse-Web-FrontSquare-Photographer-Ema-Peter.jpg';
  const img5 =
    'https://measured.ca/wp-content/uploads/1508-CubeHouse-Web-Rear-Entry-Square-Photographer-Ema-Peter.jpg';

  useEffect(() => {
    window.scrollTo(0, 0);
    // window.location.reload();
  }, []);

  return (
    // Part 1: Project summary <Name of project, Size, Customer, Location, Year >
    // Part 2: Blocks of content, each block contain Images (admin choose how many image) and Text

    <Box mt={10}>
      {/* Part 1 */}
      <Grid container mb={6}>
        <GridCenter container item xs={12} sm={6}>
          <Box mb={5} px={{ xs: 2, sm: 0 }}>
            <Box mb={3}>
              <FadeInSection fade="fade-in-right">
                <OswaldTypo sx={{ fontSize: 14, mb: 1 }}>CHI TIẾT DỰ ÁN</OswaldTypo>
              </FadeInSection>
              <FadeInSection fade="fade-in-left">
                <OswaldTypoHeaddingContent mb={2} letterSpacing={`${0.5}px !important`}>
                  {projectData?.name}
                </OswaldTypoHeaddingContent>
              </FadeInSection>
              <FadeInSection fade="fade-in-right">
                <Line width="10%" color={orange['400']} />
              </FadeInSection>
            </Box>

            <Grid container spacing={1}>
              {projectSummary.map((key, index) => (
                <Grid item xs={6} key={index}>
                  <Box>
                    <OswaldTypo letterSpacing={1.5}>{t(`project.${key}`)}</OswaldTypo>
                  </Box>
                  <Box>
                    <MontserratTypo>{projectData ? projectData[key] : ''}</MontserratTypo>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </GridCenter>
      </Grid>
      {/* Part 2 */}
      <Box>
        <FadeInSection>
          <img
            src={img1}
            alt="Main"
            style={{
              width: '100%',
              height: '70vh',
              objectFit: 'cover',
              marginBottom: 32,
            }}
          />
        </FadeInSection>

        <FadeInSection fade="fade-in-left">
          <Container sx={{ mb: 4 }} maxWidth="sm">
            <MontserratTypo sx={{ color: grey['600'], fontWeight: 500 }}>
              An office – creative workshop with large shelves with samples of design
              materials and professional books – this is how the client saw the concept of
              the project. Designers created an environment that reflects the character of
              the architectural bureau. The corrugation, a tube that interprets the
              ideological thread, the search for meaning, and the path to the goal, became
              a cross-cutting symbolic idea.
              <br />
              <br />
              <br />
              <br />
              In the open space area, the corrugation is freed and untangled to give more
              space for ideas and inspiration.
            </MontserratTypo>
          </Container>
        </FadeInSection>

        <FadeInSection fade="fade-in-right">
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <img
                  src={img2}
                  alt="Main"
                  style={{
                    width: '100%',
                    height: '50vh',
                    objectFit: 'cover',
                    marginBottom: 32,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  src={img3}
                  alt="Main"
                  style={{
                    width: '100%',
                    height: '50vh',
                    objectFit: 'cover',
                    marginBottom: 32,
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </FadeInSection>

        <FadeInSection>
          <Container sx={{ mb: 4 }} maxWidth="sm">
            <MontserratTypo sx={{ color: grey['600'], fontWeight: 500 }}>
              100% sản phẩm thực tế giống thiết kế 3D. Chúng tôi có đội ngũ giám sát sản
              xuất tại nhà máy và giám sát lắp đặt tại công trình sẽ mang đến sự “ Hài
              lòng tuyệt đối” cho quý khách.
            </MontserratTypo>
          </Container>
        </FadeInSection>

        <FadeInSection>
          <Container>
            <img
              src={img2}
              alt="Main"
              style={{
                width: '100%',
                height: '70vh',
                objectFit: 'cover',
                marginBottom: 32,
              }}
            />
          </Container>
        </FadeInSection>

        <FadeInSection>
          <Container sx={{ mb: 4 }} maxWidth="sm">
            <MontserratTypo sx={{ color: grey['600'], fontWeight: 500 }}>
              Work on the Levelstudio office was creative and coordinated both by the
              customer and the ZIKZAK Architects team. Designers are proud of the result
              and are honored to be the creators of an exemplary workspace for colleagues
              in their field.
            </MontserratTypo>
          </Container>
        </FadeInSection>
      </Box>
      {/* <Content /> */}
    </Box>
  );
};
