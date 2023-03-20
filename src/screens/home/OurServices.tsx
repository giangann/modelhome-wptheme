import { Box, Container, Grid, Stack, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { BoxWithBackgroundAndLayer, FadeInSection, Line } from '../../components';
import { IcBaselineFormatQuote } from '../../components/icon';
import { IMAGE_FOLDER_PATH } from '../../constant';
import { black, orange, OurServicesType } from '../../libs';
import {
  btnTextStyle,
  LinkCustom,
  MontserratTypoContent,
  OrangeOutlinedBtn,
  OswaldTypo,
  OswaldTypoHeaddingFooter,
} from '../../styled';

export const OurServices = (props: { data: OurServicesType }) => {
  const { data } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('m'));
  const navigate = useNavigate();

  const serviceThumbs = [
    {
      name: ' Thiết kế  kiến trúc - Nội thất',
      image: `${IMAGE_FOLDER_PATH}/service_thumb/1.jpg`,
      fade: 'fade-in-down',
      link: '/service/1',
    },
    {
      name: 'Thi công nội thất',
      image: `${IMAGE_FOLDER_PATH}/service_thumb/2.jpg`,
      fade: 'fade-in-up',
      link: '/service/2',
    },
    {
      name: 'Cải tạo - nâng cấp',
      image: `${IMAGE_FOLDER_PATH}/service_thumb/3.jpg`,
      fade: 'fade-in-down',
      link: '/service/3',
    },
  ];
  return (
    <Box position="relative" height={{ xs: 1150, sm: 1600 }}>
      <Box position="absolute" top="0" left="0" width="100%">
        {/* 3 thumbs */}
        <Container sx={{ marginTop: { xs: 8, sm: 12 } }}>
          <Grid
            sx={{ backgroundColor: 'transparent', zIndex: 5 }}
            container
            columnSpacing={4}
            rowSpacing={4}
          >
            {serviceThumbs.map((thumb, index) => (
              <Grid key={index} item xs={12} sm={4} sx={{ zIndex: 5 }}>
                <FadeInSection fade={thumb.fade}>
                  <BoxWithBackgroundAndLayer
                    image={thumb.image}
                    width="100%"
                    height={isMobile ? 330 : 550}
                    sx={{ backgroundColor: 'black', opacity: 0.25 }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        paddingY: 9,
                      }}
                    >
                      <LinkCustom href={thumb.link}>
                        <OswaldTypo
                          variant="h5"
                          sx={{
                            color: 'white',
                            fontSize: 24,
                            textAlign: 'center',
                            fontWeight: 600,
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            '&:hover': {
                              color: orange['400'],
                              transition: '0.7s',
                            },
                          }}
                        >
                          {thumb.name}
                        </OswaldTypo>
                      </LinkCustom>
                    </Box>
                  </BoxWithBackgroundAndLayer>
                </FadeInSection>
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
                  <Stack
                    sx={{
                      mt: 36,
                      ml: { sm: 4, md: 2, lg: 10, xl: 14 },
                      position: 'relative',
                    }}
                    spacing={6}
                  >
                    <Box sx={{ position: 'absolute', top: -70, left: -90 }}>
                      <IcBaselineFormatQuote
                        fontSize={200}
                        color="white"
                        opacity={0.35}
                      />
                    </Box>
                    <OswaldTypo
                      variant="h5"
                      color="white"
                      fontWeight={300}
                      letterSpacing={1.4}
                      fontSize={14}
                    >
                      {data.rightCard.subTitle}
                    </OswaldTypo>
                    <OswaldTypoHeaddingFooter
                      color="white"
                      dangerouslySetInnerHTML={{ __html: data.rightCard.title }}
                    />

                    <MontserratTypoContent
                      color="white"
                      width={{ sm: '90%', xl: '70%' }}
                      fontStyle="italic"
                      fontSize="18px!important"
                      lineHeight={'1.8em !important'}
                    >
                      {data.rightCard.description}
                    </MontserratTypoContent>

                    <Stack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      spacing={1}
                    >
                      <Line backgroundColor="white" width="10px" height="1px" />
                      <MontserratTypoContent color="white" fontWeight={900}>
                        Anh Chính - Long Biên
                      </MontserratTypoContent>
                      <Line backgroundColor="white" width="10px" height="1px" />
                    </Stack>
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
                      {data.leftCard.subTitle}
                    </OswaldTypo>
                    <OswaldTypoHeaddingFooter
                      color="white"
                      mb={4}
                      sx={{ textTransform: 'uppercase' }}
                      dangerouslySetInnerHTML={{ __html: data.leftCard.title }}
                    />

                    <MontserratTypoContent
                      color="white"
                      width="70%"
                      // fontStyle="italic"
                      mb={8}
                    >
                      {data.leftCard.description}
                    </MontserratTypoContent>

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
