import { Box, IconButton, styled } from '@mui/material';
import { Link } from 'react-router-dom';

import { MdiChat } from '../../components/icon';
import { black, BlogApiType, grey, orange } from '../../libs';
import {
  LinkCustom,
  LinkRouterCustom,
  MontserratTypo,
  RobotoTypo,
  textHoverStyle,
} from '../../styled';
import { Content } from '../project';

type BlogItemProps = {
  blog: BlogApiType;
  isDetail: boolean;
  content?: string;
};
export const BlogItem = (props: BlogItemProps) => {
  const { blog, isDetail, content } = props;
  const placeholdImage =
    'https://ld-wp.template-help.com/wordpress_free/23520/wp-content/uploads/2019/04/about.jpg';

  const tagNameList = blog.tags?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.name,
    '',
  );

  return (
    <Box>
      <LinkRouterCustom to={`/blog/${blog.slug}`}>
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
      </LinkRouterCustom>
      <MontserratTypo fontSize={14} color={black['700']} letterSpacing={0} mb={4}>
        By <StyledSpanLink>{blog.author}</StyledSpanLink> In{' '}
        <StyledSpanLink>{tagNameList}</StyledSpanLink> Posted {blog.created_at}
      </MontserratTypo>
      <img
        loading="lazy"
        src={placeholdImage}
        alt="post-thumb"
        style={{ maxWidth: '100%', marginBottom: 32 }}
      />
      <MontserratTypo
        fontSize={{ xs: 16, sm: 18 }}
        color={grey['800']}
        letterSpacing={0}
        lineHeight={2.142}
        fontWeight={300}
        mb={2}
      >
        {blog.summary}
      </MontserratTypo>

      <Content content={content ? content : ''} />
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

const StyledSpanLink = styled('a')({
  color: orange['400'],
  cursor: 'pointer',
});
