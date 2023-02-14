import { Box, Stack } from '@mui/material';
import { orange } from '../libs';
import { OswaldSubtitle, OswaldTypo, OswaldTypoHeaddingContent } from '../styled';

export type BoxWithTitleAndDescriptionProps = {
  title: string;
  tag: string;
  description?: string;
  showAllInfo?: boolean;
};
export const BoxWithTitleAndDescription = (props: BoxWithTitleAndDescriptionProps) => {
  const { title, tag, description, showAllInfo = false } = props;
  return (
    // <Box>
    <Stack
      justifyContent="space-between"
      height="100%"
      py={4}
      px={5}
      boxSizing="border-box"
    >
      <OswaldTypoHeaddingContent sx={{ mb: 5, color: orange['400'] }}>
        {title}
      </OswaldTypoHeaddingContent>
      <OswaldTypo
        variant="h5"
        // color="white"
        fontWeight={300}
        letterSpacing={1.4}
        fontSize={14}
      >
        {tag}
      </OswaldTypo>{' '}
    </Stack>
    // </Box>
  );
};
