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
        <Box width={{ sm: '70%', lg: '50%' }}>
          <Grid container>
            {milestones.map((mst, index) => (
              <GridCenter sx={{ flexDirection: 'column' }} item xs={6}>
                <CounterIncreaseValue num={mst.number} fontSize={60} fontWeight={700} />
                <OswaldTypo
                  variant="h5"
                  color="white"
                  fontWeight={300}
                  letterSpacing={1.4}
                  fontSize={14}
                  textAlign="center"
                  textTransform="uppercase"
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
