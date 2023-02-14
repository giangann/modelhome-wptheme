import { Box, Button, Grid, styled, TextField, Typography } from '@mui/material';
import {
  capatializeTransform,
  generateDefectiveTriangleByPosition,
} from '../constant/constants';
import { DefectivePositionType, orange } from '../libs';

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
export const HeaderItemTypo = styled(Typography)({
  fontSize: 17,
  letterSpacing: 1.2,
  // color: 'white',
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

export const poppinsFontStyle = {
  fontFamily: 'Poppins',
};

export const btnTextStyle = {
  fontSize: 14,
  letterSpacing: 8.4,
  fontWeight: 700,
};
