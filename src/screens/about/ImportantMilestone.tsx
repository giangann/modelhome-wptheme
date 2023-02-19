import { Box, Grid, Stack } from '@mui/material';
import { BoxWithBackgroundAndLayer, CounterIncreaseValue, Line } from '../../components';
import {
  GridCenter,
  OswaldSubtitle,
  OswaldTypo,
  OswaldTypoHeaddingFooter,
} from '../../styled';
export const ImportantMilestone = () => {
  const milestones = [
    {
      number: 358,
      text: 'Dự án hoàn thành',
    },
    {
      number: 28,
      text: 'Kiến trúc sư chất lượng',
    },
    {
      number: 18,
      text: 'Năm kinh nghiệm trong ngành',
    },
    {
      number: 724,
      text: 'Khách hàng hài lòng',
    },
  ];
  return (
    <BoxWithBackgroundAndLayer
      backgroundPosition={'left' as React.CSSProperties}
      width="100%"
      height="800px"
      sx={{ backgroundColor: '#f7992b80', opacity: 0.9 }}
      image="https://ld-wp.template-help.com/wordpress_free/23520/wp-content/uploads/2019/04/slide-2.jpg"
    >
      <Stack sx={{ mt: 22, ml: 16, position: 'relative' }} spacing={6}>
        {/* <Box sx={{ position: 'absolute', top: -70, left: -90 }}>
          <IcBaselineFormatQuote fontSize={200} color="white" opacity={0.35} />
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
          Không phải mọi công ty xây dựng đều có thể xây dựng một tòa nhà từ đầu và hoàn
          thành 80.000 ft vuông không gian cải tiến văn phòng hạng nhất trong 13 tháng.
        </MontserratTypoContent> */}
        <Box>
          <OswaldTypo
            variant="h5"
            color="white"
            fontWeight={300}
            letterSpacing={1.4}
            fontSize={14}
            mb={2}
          >
            CỘT MỐC QUAN TRỌNG
          </OswaldTypo>
          <OswaldTypoHeaddingFooter color="white" mb={4}>
            CỘT MỐC
            <br /> ĐÃ HOÀN THÀNH
          </OswaldTypoHeaddingFooter>
          <Line width="70px" backgroundColor="white" />
        </Box>
        <Box width={{sm:"70%", lg:"50%"}}>
          <Grid container>
            {milestones.map((mst, index) => (
              <GridCenter sx={{flexDirection:'column'}} item xs={6}>
                <CounterIncreaseValue
                  num={mst.number}
                  fontSize={60}
                  fontWeight={700}
                />
                <OswaldTypo
                  variant="h5"
                  color="white"
                  fontWeight={300}
                  letterSpacing={1.4}
                  fontSize={14}
                  textAlign="center"
                  textTransform="uppercase"
                  // mb={2}
                >
                  {mst.text}
                </OswaldTypo>
              </GridCenter>
            ))}
          </Grid>
        </Box>
      </Stack>
    </BoxWithBackgroundAndLayer>
  );
};
