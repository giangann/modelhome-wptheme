import { AboutUsType } from '@/libs';
import { Container, Grid, Stack } from '@mui/material';

import { HeadingBlock } from '../../components';
import { MontserratTypoContent } from '../../styled';

export const AboutUs = (props: { data: AboutUsType }) => {
  const { data } = props;
  return (
    <Container sx={{ marginTop: { xs: 8, sm: 12 }, maxWidth: '1000px !important' }}>
      <Grid container columnSpacing={4}>
        <Grid item xs={12} sm={5} mb={{ xs: 2.5, sm: 'none' }}>
          <HeadingBlock
            subTitle={data.subTitle}
            title={data.title}
          />
        </Grid>

        <Grid item xs={12} sm={7}>
          <Stack spacing={4}>
            <MontserratTypoContent sx={{ fontWeight: 500 }}>
              {data.description.highlight}
            </MontserratTypoContent>
            <MontserratTypoContent>{data.description.normal}</MontserratTypoContent>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};
