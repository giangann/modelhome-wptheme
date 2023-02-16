import { Box, Container, Grid, Stack, useMediaQuery, useTheme } from '@mui/material';
import { BoxWithBackgroundAndLayer, FadeInSection } from '../../components';
import { IcBaselineFormatQuote } from '../../components/icon';
import { orange } from '../../libs';
import {
  btnTextStyle,
  MontserratTypoContent,
  OrangeOutlinedBtn,
  OswaldTypo,
  OswaldTypoHeaddingFooter,
} from '../../styled';

export const OurServices = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('m'));

  const serviceThumbs = [
    {
      name: 'THIẾT KẾ NỘI THẤT',
      image:
        'https://ld-wp.template-help.com/wordpress_free/23520/wp-content/uploads/2019/04/Engineering.jpg',
      fade: 'fade-in-down',
    },
    {
      name: 'THI CÔNG CÔNG TRÌNH',
      image:
        'https://ld-wp.template-help.com/wordpress_free/23520/wp-content/uploads/2019/04/Architecture.jpg',
      fade: 'fade-in-up',
    },
    {
      name: 'THIẾT KẾ KIẾN TRÚC',
      image:
        'https://ld-wp.template-help.com/wordpress_free/23520/wp-content/uploads/2019/04/Interior-Design.jpg',
      fade: 'fade-in-down',
    },
  ];
  return (
    <Box position="relative" height={{ xs: 1200, sm: 1600 }}>
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
                    height={{ xs: 330, sm: 500 }}
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
                  <Stack sx={{ mt: 52, ml: 16, position: 'relative' }} spacing={6}>
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
                      PHẢN HỒI
                    </OswaldTypo>
                    <OswaldTypoHeaddingFooter color="white">
                      KHÁCH HÀNG <br /> ĐÁNH GIÁ
                    </OswaldTypoHeaddingFooter>

                    <MontserratTypoContent
                      color="white"
                      width="70%"
                      fontStyle="italic"
                      fontSize="18px!important"
                      lineHeight={2.25}
                    >
                      Không phải mọi công ty xây dựng đều có thể xây dựng một tòa nhà từ
                      đầu và hoàn thành 80.000 ft vuông không gian cải tiến văn phòng hạng
                      nhất trong 13 tháng.
                    </MontserratTypoContent>
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
                      LỢI THẾ
                    </OswaldTypo>
                    <OswaldTypoHeaddingFooter color="white" mb={4}>
                      LÀM VIỆC VỚI
                      <br /> DỰ ÁN PHỨC TẠP
                    </OswaldTypoHeaddingFooter>

                    <MontserratTypoContent
                      color="white"
                      width="70%"
                      // fontStyle="italic"
                      mb={8}
                    >
                      Thiết kế các tòa nhà bền vững, hiệu suất cao đòi hỏi phải tích hợp
                      các hệ thống kiến trúc và kỹ thuật vào một thiết kế cân bằng giữa
                      tính bền vững và hiệu quả chi phí. Archus hợp nhất những thực hành
                      này với các yêu cầu và nguyên tắc riêng cần thiết cho các cơ sở công
                      nghệ tiên tiến.
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
