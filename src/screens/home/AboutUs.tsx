import { Container, Grid, Stack } from '@mui/material';
import { MontserratTypo, OswaldTypo, OswaldTypoHeaddingContent } from '../../styled';

export const AboutUs = () => {
  return (
    <Container sx={{ marginTop: 12 }}>
      <OswaldTypo sx={{ fontSize: 14, mb: 2 }}>VỀ CÔNG TY</OswaldTypo>
      <Grid container columnSpacing={12}>
        <Grid item xs={12} sm={4}>
          <Stack>
            <OswaldTypoHeaddingContent>CHÚNG TÔI TẠO RA</OswaldTypoHeaddingContent>
            <OswaldTypoHeaddingContent>
              VÀ HIỆN THỰC HÓA Ý TƯỞNG
            </OswaldTypoHeaddingContent>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Stack spacing={2}>
            <MontserratTypo sx={{ fontSize: 14, fontWeight: 600 }}>
              We apply innovative design solutions to enhance people’s residential
              wellbeing and to help workplaces succeed! All our team collaborates with our
              clients!
            </MontserratTypo>
            <MontserratTypo sx={{ fontSize: 14, fontWeight: 300 }}>
              All our team collaborates with our clients, across all of our 3 offices,
              which are located throughout the US. Our mission is to implement the
              outstanding design ideas and solutions for any project we’re working on…
              During that process we carefully combine client’s guidelines, technical
              possibilities, as well as the environmental issues. Engineering and interior
              design solutions that we deliver are usually born after a collaborative
              process.
            </MontserratTypo>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};
