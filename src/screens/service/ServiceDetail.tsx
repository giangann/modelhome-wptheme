import { Box, Container, Grid, Stack, styled, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

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
  const params = useParams();
  const id = parseInt(params.id as string);

  const introduceImage = `${IMAGE_FOLDER_PATH}/service_thumb/${2}.jpg`;

  const [expanded, setExpanded] = React.useState<string | false>('panel1');
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const detailData = serviceDetail[id - 1];
  return (
    <Container sx={{ marginTop: { xs: 8, sm: 12 }, maxWidth: '1000px !important' }}>
      <Grid container columnSpacing={4}>
        <Grid item xs={12} sm={5} mb={{ xs: 2.5, sm: 'none' }}>
          <HeadingBlock subTitle="Dịch vụ" title={detailData.title} />
        </Grid>

        <Grid item xs={12} sm={7}>
          <img
            loading="lazy"
            src={introduceImage}
            alt="introduce"
            style={{ marginBottom: 40, maxWidth: '100%' }}
          />
          <Stack spacing={4}>
            <MontserratTypoContent sx={{ fontWeight: 500 }}>
              {detailData.description}
            </MontserratTypoContent>
          </Stack>
        </Grid>

        {/* workflow part */}
        <Grid item xs={12} sx={{ my: 6 }}>
          <OswaldTypoHeaddingFooter mb={4}>
            {detailData.workFlow.title}
          </OswaldTypoHeaddingFooter>

          {typeof detailData.workFlow.step === 'object' &&
          !Array.isArray(detailData.workFlow.step)
            ? Object.entries(detailData.workFlow.step).map(([key, value], index) => (
                <Box mb={4} key={index}>
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
                    <AccordionDetails sx={{ my: 1 }}>
                      {value.content.map((item: any, index: any) => (
                        <AccordionDetailTypo key={index} sx={{ mt: 1 }}>
                          + {item}
                        </AccordionDetailTypo>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </Box>
              ))
            : undefined}

          {Array.isArray(detailData.workFlow.step)
            ? detailData.workFlow.step.map((step, index) => (
                <Accordion
                  TransitionProps={{ timeout: 700 }}
                  expanded={expanded === `panel${index + 1}`}
                  onChange={handleChange(`panel${index + 1}`)}
                  sx={{ color: 'black', paddingX: 1, paddingY: 2 }}
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
                      {index + 1}. {step}
                    </AccordionSummaryTypo>
                  </AccordionSummary>
                </Accordion>
              ))
            : undefined}
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

const AccordionDetailTypo = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontSize: 15,
  fontWeight: 300,
  letterSpacing: 0,
  lineHeight: '30px',
  color: 'black',

  [theme.breakpoints.down('sm')]: {
    fontSize: 14,
  },
}));
