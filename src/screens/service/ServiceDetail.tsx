import { Box, Container, Grid, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import { HeadingBlock } from '../../components';
import { IMAGE_FOLDER_PATH, serviceDetail } from '../../constant';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  MontserratTypoContent,
  OswaldTypoHeaddingFooter,
} from '../../styled';
export const ServiceDetail = () => {
  const introduceImage = `${IMAGE_FOLDER_PATH}/service_thumb/${2}.jpg`;

  const [expanded, setExpanded] = React.useState<string | false>('panel1');
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <Container sx={{ marginTop: { xs: 8, sm: 12 }, maxWidth: '1000px !important' }}>
      <Grid container columnSpacing={4}>
        <Grid item xs={12} sm={5} mb={{ xs: 2.5, sm: 'none' }}>
          <HeadingBlock subTitle="Dịch vụ" title="Dịch vụ thiết kế kiến trúc nội thất" />
        </Grid>

        <Grid item xs={12} sm={7}>
          <img
            src={introduceImage}
            alt="introduce"
            style={{ marginBottom: 40, maxWidth: '100%' }}
          />
          <Stack spacing={4}>
            <MontserratTypoContent sx={{ fontWeight: 500 }}>
              Thiết kế kiến trúc là việc bố trí các kết cấu, kiến trúc, hệ thống cấp điện
              chiếu sáng, cấp thoát nước và điều hòa thông gió,… để tạo nên một nơi sinh
              sống chất lượng, tiện ích với đầy đủ công năng sống thuận tiện, thoải mái và
              là niềm tự hào của các thành viên trong gia đình.
            </MontserratTypoContent>
          </Stack>
        </Grid>

        {/* workflow part */}
        <Grid item xs={12} sx={{ my: 6 }}>
          <OswaldTypoHeaddingFooter mb={4}>
            Quy trình thiết kế Kiến trúc nội thất
          </OswaldTypoHeaddingFooter>

          {Object.entries(serviceDetail.workFlow.step).map(([key, value], index) => (
            <Box mb={4}>
              <Accordion
                TransitionProps={{ timeout: 700 }}
                expanded={expanded === `panel${index + 1}`}
                onChange={handleChange(`panel${index + 1}`)}
                sx={{ color: 'black', paddingLeft: 1 }}
              >
                <AccordionSummary
                  sx={{
                    '& .MuiAccordionSummary-expandIconWrapper': {
                      color: 'black',
                    },
                  }}
                  aria-controls={`panel${index + 1}d-content`}
                  id={index.toString()}
                >
                  <AccordionSummaryTypo>
                    {key.toUpperCase()}. {value.title}
                  </AccordionSummaryTypo>
                </AccordionSummary>
                <AccordionDetails>
                  {value.content.map((item, index) => (
                    <AccordionDetailTypo>{item}</AccordionDetailTypo>
                  ))}
                </AccordionDetails>
              </Accordion>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};
const AccordionSummaryTypo = styled(Typography)(({ theme }) => ({
  fontFamily: 'Mulish',
  fontSize: 18,
  fontWeight: 700,
  letterSpacing: '0px',
  textTransform: 'uppercase',
  lineHeight: '1.125em',

  [theme.breakpoints.down('sm')]: {
    fontSize: 16,
  },
}));

const AccordionDetailTypo = styled(Typography)({
  fontFamily: 'Montserrat',
  fontSize: 14,
  fontWeight: 300,
  letterSpacing: 0,
  lineHeight: '30px',
  color: 'black',
});
