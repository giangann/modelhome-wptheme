import { Box, IconButton } from '@mui/material';

import { MdiChat } from '../../components/icon';
import { black, BlogApiType, grey } from '../../libs';
import { MontserratTypo, RobotoTypo, textHoverStyle } from '../../styled';

export const BlogItem = (props: { blog: BlogApiType }) => {
  const { blog } = props;
  const placeholdImage =
    'https://ld-wp.template-help.com/wordpress_free/23520/wp-content/uploads/2019/04/about.jpg';
  return (
    <Box>
      <RobotoTypo
        variant="h3"
        sx={{ ...textHoverStyle }}
        fontSize={{ xs: 21, sm: 28 }}
        fontWeight={400}
        lineHeight={1.4}
        mb={4}
      >
        {blog.title}
      </RobotoTypo>
      <MontserratTypo fontSize={14} color={black['700']} letterSpacing={0} mb={4}>
        By admin In Uncategorized Posted April 9, 2019
      </MontserratTypo>
      <img
        src={placeholdImage}
        alt="post-thumb"
        style={{ maxWidth: '100%', marginBottom: 32 }}
      />
      <MontserratTypo
        fontSize={18}
        color={grey['800']}
        letterSpacing={0}
        lineHeight={2.142}
        fontWeight={300}
        mb={2}
      >
        {blog.summary}
      </MontserratTypo>
      <IconButton
        sx={{ backgroundColor: grey['100'], borderRadius: 1, mb: 6, display: 'flex' }}
      >
        <MdiChat fontSize={16} />
        <MontserratTypo fontSize={12} ml={0.5}>
          0
        </MontserratTypo>
      </IconButton>
    </Box>
  );
};
