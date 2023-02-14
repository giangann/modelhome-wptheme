import { Box, Stack, useTheme, useMediaQuery } from '@mui/material';
import { black, grey, orange } from '../libs';
import {
  MontserratTypo,
  OswaldSubtitle,
  OswaldTypo,
  OswaldTypoHeaddingContent,
} from '../styled';

export type BoxWithTitleAndDescriptionProps = {
  title: string;
  tag: string;
  description?: string;
  showAllInfo?: boolean;
};
export const BoxWithTitleAndDescription = (props: BoxWithTitleAndDescriptionProps) => {
  const { title, tag, description, showAllInfo = false } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    // <Box>
    <Stack
      justifyContent={showAllInfo || isMobile ? 'center' : 'space-between'}
      height="100%"
      p={showAllInfo ? { xs: 2, sm: 14 } : { xs: 2, sm: 7 }}
      boxSizing="border-box"
    >
      {showAllInfo ? (
        <OswaldTypo mb={1} fontSize={14} color={orange['400']} letterSpacing={1.4}>
          Dự án mới nhất
        </OswaldTypo>
      ) : undefined}
      <OswaldTypoHeaddingContent
        sx={
          !showAllInfo
            ? {
                mb: { xs: 2, sm: 5 },
                color: orange['400'],
                fontSize: { xs: 22, sm: 36 },
                textAlign: { xs: 'center', sm: 'unset' },
              }
            : {
                mb: { xs: 2, sm: 8 },
              }
        }
      >
        {title}
      </OswaldTypoHeaddingContent>
      {showAllInfo && !isMobile ? (
        <MontserratTypo color={black['800']} fontStyle="italic" mb={{ xs: 3, sm: 6 }}>
          {description}
        </MontserratTypo>
      ) : undefined}
      {!isMobile ? (
        <OswaldTypo variant="h5" fontWeight={300} letterSpacing={1.4} fontSize={14}>
          {tag}
        </OswaldTypo>
      ) : undefined}
    </Stack>
    // </Box>
  );
};
