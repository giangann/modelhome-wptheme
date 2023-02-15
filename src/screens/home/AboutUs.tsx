import { Box, Container, Grid, Stack } from '@mui/material';
import { FadeInSection, HeadingBlock, Line } from '../../components';
import { orange } from '../../libs';
import {
  MontserratTypo,
  MontserratTypoContent,
  OswaldTypo,
  OswaldTypoHeaddingContent,
} from '../../styled';

export const AboutUs = () => {
  return (
    <Container sx={{ marginTop: { xs: 8, sm: 12 }, maxWidth: '1000px !important' }}>
      <Grid container columnSpacing={4}>
        <Grid item xs={12} sm={5} mb={{ xs: 2.5, sm: 'none' }}>
          <HeadingBlock
            subTitle="Về công ty"
            title="Chúng tôi tạo ra và hiện thực hóa ý tưởng"
          />
        </Grid>

        <Grid item xs={12} sm={7}>
          <Stack spacing={4}>
            <MontserratTypoContent sx={{ fontWeight: 500 }}>
              We apply innovative design solutions to enhance people’s residential
              wellbeing and to help workplaces succeed! All our team collaborates with our
              clients!
            </MontserratTypoContent>
            <MontserratTypoContent>
              All our team collaborates with our clients, across all of our 3 offices,
              which are located throughout the US. Our mission is to implement the
              outstanding design ideas and solutions for any project we’re working on…
              During that process we carefully combine client’s guidelines, technical
              possibilities, as well as the environmental issues. Engineering and interior
              design solutions that we deliver are usually born after a collaborative
              process.
            </MontserratTypoContent>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};
