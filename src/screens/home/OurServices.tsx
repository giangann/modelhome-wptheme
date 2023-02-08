import { Box, Container, Grid, Stack, useMediaQuery, useTheme } from '@mui/material';
import { BoxWithBackgroundAndLayer } from '../../components';
import { orange } from '../../libs';
import {
  btnTextStyle,
  MontserratTypo, OrangeOutlinedBtn,
  OswaldTypo,
  OswaldTypoHeaddingContent
} from '../../styled';

export const OurServices = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('m'));

  const serviceThumbs = [
    {
      name: 'THIẾT KẾ NỘI THẤT',
      image:
        'https://ld-wp.template-help.com/wordpress_free/23520/wp-content/uploads/2019/04/Engineering.jpg',
    },
    {
      name: 'THI CÔNG CÔNG TRÌNH',
      image:
        'https://ld-wp.template-help.com/wordpress_free/23520/wp-content/uploads/2019/04/Architecture.jpg',
    },
    {
      name: 'THIẾT KẾ KIẾN TRÚC',
      image:
        'https://ld-wp.template-help.com/wordpress_free/23520/wp-content/uploads/2019/04/Interior-Design.jpg',
    },
  ];
  return (
    <Box position="relative" height={1600}>
      <Box position="absolute" top="0" left="0" width="100%">
        {/* 3 thumbs */}
        <Container sx={{ marginTop: 12 }}>
          <Grid
            sx={{ backgroundColor: 'transparent', zIndex: 5 }}
            container
            columnSpacing={4}
          >
            {serviceThumbs.map((thumb, index) => (
              <Grid key={index} item xs={12} sm={4} sx={{ zIndex: 5 }}>
                <BoxWithBackgroundAndLayer image={thumb.image} width="100%" height={500}>
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      paddingY: 9,
                    }}
                  >
                    <OswaldTypo
                      variant="h5"
                      sx={{
                        color: 'white',
                        fontSize: 24,
                        textAlign: 'center',
                        fontWeight: 600,
                        cursor: 'pointer',

                        '&:hover': {
                          color: orange['400'],
                          transition: '0.7s',
                        },
                      }}
                    >
                      {thumb.name}
                    </OswaldTypo>
                  </Box>
                </BoxWithBackgroundAndLayer>
              </Grid>
            ))}
          </Grid>
        </Container>

        {isMobile ? undefined : (
          <>
            {/* orange card */}

            <Grid container sx={{ position: 'relative', top: '-240px' }}>
              <Grid item xs={6} sx={{ zIndex: 0 }} />
              <Grid item xs={6} sx={{ zIndex: 4 }}>
                <BoxWithBackgroundAndLayer
                  backgroundPosition={'left' as React.CSSProperties}
                  width="100%"
                  height="1000px"
                  sx={{ backgroundColor: orange['400'], opacity: 0.9 }}
                  image="https://ld-wp.template-help.com/wordpress_free/23520/wp-content/uploads/2019/04/home-testimonials-bg.jpg"
                >
                  <Stack sx={{ mt: 52, ml: 16 }} spacing={6}>
                    <OswaldTypo
                      variant="h5"
                      color="white"
                      fontWeight={300}
                      letterSpacing={1.4}
                      fontSize={14}
                    >
                      TESTIMONIALS
                    </OswaldTypo>
                    <OswaldTypoHeaddingContent
                      color="white"
                      letterSpacing={1.8}
                      lineHeight="1.333em"
                    >
                      WHAT OUR <br /> CLIENTS SAY
                    </OswaldTypoHeaddingContent>

                    <MontserratTypo
                      color="white"
                      lineHeight={2.25}
                      width="70%"
                      fontStyle="italic"
                      fontWeight={300}
                    >
                      It is not every construction company that can build a building from
                      ground up and complete 80,000 sq. ft. of first class office
                      improvement space in 13 months.
                    </MontserratTypo>
                  </Stack>
                </BoxWithBackgroundAndLayer>
              </Grid>
            </Grid>

            {/* black card*/}
            <Grid container sx={{ position: 'relative', top: '-760px', zIndex: 3 }}>
              <Grid item xs={8.5}>
                <BoxWithBackgroundAndLayer
                  width="100%"
                  height="700px"
                  sx={{ backgroundColor: 'black' }}
                >
                  <Box
                    sx={{
                      ml: { xs: '10%', md: '12%', lg: '20%' },
                      mt: 12,
                      width: { xs: '80%', md: '70%', lg: '50%' },
                    }}
                  >
                    <OswaldTypo
                      variant="h5"
                      color="white"
                      fontWeight={300}
                      letterSpacing={1.4}
                      fontSize={14}
                      mb={2}
                    >
                      ADVANTAGES
                    </OswaldTypo>
                    <OswaldTypoHeaddingContent
                      color="white"
                      letterSpacing={1.8}
                      lineHeight="1.333em"
                      mb={4}
                    >
                      WORKING ON
                      <br /> EXCLUSIVE PROJECTS
                    </OswaldTypoHeaddingContent>

                    <MontserratTypo
                      color="white"
                      lineHeight={2.25}
                      width="70%"
                      fontStyle="italic"
                      fontWeight={300}
                      fontSize={14}
                      mb={8}
                    >
                      {' '}
                      Designing sustainable, high-performance buildings requires an
                      integration of architectural and engineered systems into a balanced
                      design of sustainability and cost-effectiveness. Archus merges these
                      practices with the unique requirements and guidelines necessary for
                      advanced technology facilities.
                    </MontserratTypo>

                    <OrangeOutlinedBtn sx={{ padding: '16px 48px', margin: 'auto' }}>
                      <OswaldTypo sx={{ ...btnTextStyle }}>Xem thêm</OswaldTypo>
                    </OrangeOutlinedBtn>
                  </Box>
                </BoxWithBackgroundAndLayer>
              </Grid>
            </Grid>
          </>
        )}
      </Box>
    </Box>
  );
};
