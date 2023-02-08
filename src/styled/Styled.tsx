import { Box, Button, styled, TextField, Typography } from '@mui/material';
import { orange } from '../libs';

// Poppins, Montserrat, Oswald
export const PoppinsTypo = styled(Typography)({
  fontFamily: 'Poppins',
});

export const MontserratTypo = styled(Typography)({
  fontFamily: 'Montserrat',
});
export const OswaldTypo = styled(Typography)({
  fontFamily: 'Oswald',
});

export const OswaldTypoHeaddingFooter = styled(Typography,{ shouldForwardProp: (prop) => prop !== 'color' })<{color: string}>({
  fontFamily: 'Oswald',
  fontSize: 36,
  fontWeight: 700,
  letterSpacing: 1.8,
});

export const OswaldTypoHeaddingContent = styled(Typography)({
  fontFamily: 'Oswald',
  fontSize: 36,
  fontWeight: 700,
  letterSpacing: 2.4,
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


export const poppinsFontStyle = {
  fontFamily: 'Poppins',
};

export const btnTextStyle = {
  fontSize: 14,
  letterSpacing: 8.4,
  fontWeight: 700,
};
