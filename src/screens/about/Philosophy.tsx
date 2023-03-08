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
      summary: 'Thật - Luôn Tận Tâm',
      detail:
        'Nói THẬT, thi công THẬT là kim chỉ nam của Model Home. Niềm tin luôn bắt đầu từ sự mình bạch thông tin. Tập thể đội ngũ Model Home luôn tự hòa và hân hoan được đồng hành với quý khách hàng trong việc đưa ngôi nhà trong mơ ra khỏi bản vẽ.',
    },
    {
      id: 'panel2d-header',
      summary: 'Khách hàng là trọng tâm',
      detail:
        'Đối với Model Home, ngoài mục tiêu tạo nên những công trình chắc chắn với xu hướng vượt thời đại. Chúng tôi cũng tâm niệm rằng, trải nghiệm của khách hàng xuyên xuốt quá trình này là cực kỳ quan trọng. Vì vậy, chúng tôi luôn mong muốn đồng hành với khách hàng qua từng giai đoạn tạo ra ngôi nhà với sự minh bạch, tôn trọng, và tin tưởng.',
    },
    {
      id: 'panel3d-header',
      summary: 'Hướng vào kết quả',
      detail:
        'Không ngừng học hỏi kiến thức, kỹ năng, xây dựng ý thức tiết kiệm cùng tinh thần kiên định, tập trung vào mục tiêu nhằm nâng cao hiệu quả công việc để gia tăng lợi ích cho khách hàng và cho Model Home.',
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
