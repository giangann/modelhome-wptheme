import { Title } from '@mui/icons-material';
import { Box } from '@mui/material';
import React from 'react';

import { orange } from '../libs';
import { OswaldTypo, OswaldTypoHeaddingContent } from '../styled';
import { FadeInSection } from './FadeInSection';
import { Line } from './Line';

type HeadingBlockProps = {
  title: string | React.ReactNode;
  subTitle: string;
};
export const HeadingBlock = (props: HeadingBlockProps) => {
  const { title, subTitle } = props;
  return (
    <Box sx={{ position: { xs: 'static', sm: 'relative' }, top: -32 }}>
      <FadeInSection fade="fade-in-right">
        <OswaldTypo sx={{ fontSize: 14, mb: 2 }}>{subTitle.toUpperCase()}</OswaldTypo>
      </FadeInSection>
      <FadeInSection fade="fade-in-left">
        {typeof title === 'string' ? (
          <OswaldTypoHeaddingContent mb={{ xs: 4, sm: 4 }}>
            {title.toUpperCase()}
          </OswaldTypoHeaddingContent>
        ) : (
          title
        )}
      </FadeInSection>
      <FadeInSection fade="fade-in-right">
        <Line width="20%" color={orange['400']} />
      </FadeInSection>
    </Box>
  );
};
