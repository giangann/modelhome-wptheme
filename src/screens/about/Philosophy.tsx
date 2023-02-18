import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import { BoxWithBackgroundAndLayer, Line } from '../../components';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  OswaldTypo,
  OswaldTypoHeaddingFooter,
} from '../../styled';

export const Philosophy = () => {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const accordion = [
    {
      id: 'panel1d-header',
      summary: 'Sứ mệnh',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sitamet blandit leo lobortis eget.',
    },
    {
      id: 'panel2d-header',
      summary: 'Tầm nhìn',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sitamet blandit leo lobortis eget.',
    },
    {
      id: 'panel3d-header',
      summary: 'Giá trị',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sitamet blandit leo lobortis eget.',
    },
  ];

  return (
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
          DỊCH VỤ
        </OswaldTypo>
        <OswaldTypoHeaddingFooter color="white" mb={5}>
          TRIẾT LÝ
          <br /> CỦA MODELHOME
        </OswaldTypoHeaddingFooter>
        <Line width="70px" />

        <div style={{ marginTop: '16px' }}>
          {accordion.map((accor, index) => (
            <Accordion
              TransitionProps={{ timeout: 700 }}
              expanded={expanded === `panel${index + 1}`}
              onChange={handleChange(`panel${index + 1}`)}
            >
              <AccordionSummary
                aria-controls={`panel${index + 1}d-content`}
                id={accor.id}
              >
                <AccordionSummaryTypo>{accor.summary}</AccordionSummaryTypo>
              </AccordionSummary>
              <AccordionDetails>
                <AccordionDetailTypo>{accor.detail}</AccordionDetailTypo>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Box>
    </BoxWithBackgroundAndLayer>
  );
};

const AccordionSummaryTypo = styled(Typography)({
  fontFamily: 'Oswald',
  fontSize: 24,
  fontWeight: 700,
  letterSpacing: '1.2px',
  textTransform: 'uppercase',
  lineHeight: '1.125em',
});

const AccordionDetailTypo = styled(Typography)({
  fontFamily: 'Montserrat',
  fontSize: 14,
  fontWeight: 300,
  letterSpacing: 0,
  lineHeight: '30px',
});
