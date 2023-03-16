import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Box, Button, Grid, styled, TextField, Typography } from '@mui/material';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';

import {
  capatializeTransform,
  generateDefectiveTriangleByPosition,
} from '../constant/constants';
import { DefectivePositionType, orange } from '../libs';

// Poppins, Montserrat, Oswald
export const PoppinsTypo = styled(Typography)({
  fontFamily: 'Poppins',
});
export const MulishTypo = styled(Typography)({
  fontFamily: 'Mulish',
});
export const MontserratTypo = styled(Typography)({
  fontFamily: 'Montserrat',
});
export const OswaldTypo = styled(Typography)({
  fontFamily: 'Oswald',
});
export const RobotoTypo = styled(Typography)({
  fontFamily: 'Roboto',
});
export const HeaderItemTypo = styled(Typography)({
  fontSize: 17,
  letterSpacing: '1.2px',
  fontFamily: 'Oswald',
  fontWeight: 500,
  // color: 'white',
});

export const MontserratDashboardTitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Montserrat',
  fontSize: 36,
  fontWeight: 900,
  color: 'black',
  textAlign: 'center',
  textTransform: 'uppercase',
  [theme.breakpoints.down('sm')]: {
    fontSize: 30,
  },
}));

export const MontserratTypoContent = styled(Typography)({
  fontFamily: 'Montserrat',
  lineHeight: '2.143em',
  fontSize: 14,
  fontWeight: 300,
  letterSpacing: 0,
});
export const OswaldTypoHeaddingFooter = styled(Typography)({
  fontFamily: 'Oswald',
  fontSize: 36,
  fontWeight: 700,
  letterSpacing: 1.8,
  lineHeight: '1.33em',
});

export const OswaldTypoHeaddingContent = styled(Typography)({
  fontFamily: 'Oswald',
  fontSize: 48,
  fontWeight: 700,
  letterSpacing: 2.4,
  lineHeight: '1.125em',
});

export const OswaldTypoHeaddingBanner = styled(Typography)(({ theme }) => ({
  fontFamily: 'Oswald',
  fontSize: 80,
  fontWeight: 700,
  letterSpacing: 4,

  [theme.breakpoints.down('sm')]: {
    fontSize: 40,
    letterSpacing: 3.2,
  },
}));

export const OswaldSubtitle = styled(Typography)(({ theme }) => ({
  fontFamily: 'Oswald',
  fontSize: 38,
  fontWeight: 300,
  letterSpacing: 1.4,
  color: 'white',

  [theme.breakpoints.down('sm')]: {
    fontSize: 24,
  },
}));

export const PoppinsOrangeSpan = styled('span')({
  color: 'orange',
  fontFamily: 'Poppins',
});

export const OrangeContainedBtn = styled(Button)({
  borderRadius: 0,
  color: 'white',
  backgroundColor: orange['400'],
  border: `1px solid ${orange['400']}`,

  '&:hover': {
    color: orange['400'],
    backgroundColor: 'transparent',
    transition: '1s',
  },
});

export const OrangeOutlinedBtn = styled(Button)({
  borderRadius: 0,
  border: `1px solid ${orange['400']}`,
  color: orange['400'],
  backgroundColor: 'transparent',
  '&:hover': {
    color: 'white',
    backgroundColor: orange['400'],
    transition: '1s',
  },
});

export const LayerBox = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

export const GridCenterVertical = styled(Grid)({
  display: 'flex',
  alignItems: 'center',
});

export const GridCenterHorizontal = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
});

export const GridCenter = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ToogleLanguageText = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 200,
  color: 'white',
  opacity: 0.7,
}));

export const TriangleByBorder = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'defectivePosition',
})<{ defectivePosition: DefectivePositionType }>(({ defectivePosition }) => ({
  position: 'absolute',
  borderTop: '1.46rem solid transparent',
  borderRight: '1.46rem solid transparent',
  borderBottom: '1.46rem solid transparent',
  borderLeft: '1.46rem solid transparent',
  ...generateDefectiveTriangleByPosition(defectivePosition),
}));

export const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },

  backgroundColor: 'transparent',
  color: 'white',
}));

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  padding: 0,
  backgroundColor: 'transparent',
  // theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: 'white',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
    color: orange['400'],
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
  '& .Mui-expanded': {
    color: orange['400'],
  },
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: 0,
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export const LinkCustom = styled('a')({
  textDecoration: 'none',
});

export const poppinsFontStyle = {
  fontFamily: 'Poppins',
};

export const btnTextStyle = {
  fontSize: 14,
  letterSpacing: 8.4,
  fontWeight: 700,
};

export const textHoverStyle = {
  cursor: 'pointer',

  '&:hover': {
    color: orange['400'],
    transition: '0.7s',
  },
};

export const centerDiv = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const styleTypoHeadingFooter = {
  fontFamily: 'Oswald',
  fontSize: 36,
  fontWeight: 700,
  letterSpacing: 1.8,
  lineHeight: '1.33em',
};
