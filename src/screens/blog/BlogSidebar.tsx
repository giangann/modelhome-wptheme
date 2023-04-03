import { tagsAtom } from '@/libs/atom/data';
import { Box, Divider, Grid, IconButton, Stack, styled, Typography } from '@mui/material';
import { useAtomValue } from 'jotai';
import { Link } from 'react-router-dom';

import { TextFieldWithCustomFont } from '../../components';
import { IcBaselineSearch } from '../../components/icon';
import { BlogApiType, grey, orange } from '../../libs';
import { centerDiv, LinkCustom, LinkRouterCustom, MontserratTypo, textHoverStyle } from '../../styled';

export const BlogSidebar = (props: { listBlog: BlogApiType[]; isLoading: boolean }) => {
  const { listBlog, isLoading } = props;
  const tagsListAtom = useAtomValue(tagsAtom);

  return (
    <>
      {isLoading ? (
        'Loading'
      ) : (
        <Grid item xs={12} sm={5} justifyContent="flex-start">
          <Stack spacing={4}>
            {/* Search field */}
            <Stack direction="row" spacing={1}>
              <TextFieldWithCustomFont
                fullWidth
                placeholder="Nhập từ khóa tìm kiếm"
                fontName="Montserrat"
                InputProps={{
                  sx: {
                    height: '36px !important',
                    fontSize: 13,
                  },
                }}
              />
              <Box sx={{ backgroundColor: orange['400'], borderRadius: 1, ...centerDiv }}>
                <IconButton>
                  <IcBaselineSearch fontSize={16} color="white" />
                </IconButton>
              </Box>
            </Stack>
            <Divider orientation="horizontal" flexItem />
            {/* Recent post */}
            <Box>
              <TitleSidebarBlock sx={{ mb: 4 }} variant="h4">
                Bài viết gần đây
              </TitleSidebarBlock>
              <Stack spacing={3}>
                {listBlog.map((blog, index) => (
                  <LinkRouterCustom to={`/blog/${blog.slug}`} key={index}>
                    <PostTittleSidebarRecentPost sx={{ ...textHoverStyle }}>
                      {blog.title}
                    </PostTittleSidebarRecentPost>
                  </LinkRouterCustom>
                ))}
              </Stack>
            </Box>
            <Divider orientation="horizontal" flexItem />

            {/* Recent comment */}
            <Box>
              <TitleSidebarBlock variant="h4">Bình luận gần đây</TitleSidebarBlock>
            </Box>
            <Divider orientation="horizontal" flexItem />
            {/* Tags or Categories */}
            <Box>
              <TitleSidebarBlock variant="h4" sx={{ mb: 3 }}>
                Phân loại
              </TitleSidebarBlock>
              <Stack spacing={2}>
                {tagsListAtom.map((tag, index) => (
                  <TagTypo key={index}>{tag.name}</TagTypo>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Grid>
      )}
    </>
  );
};

const TitleSidebarBlock = styled(Typography)({
  fontSize: 20,
  color: grey['800'],
  lineHeight: 1.5,
  fontWeight: 400,
  letterSpacing: 0,
  textTransform: 'uppercase',
});

const PostTittleSidebarRecentPost = styled(Typography)({
  fontSize: 14,
  fontWeight: 500,
  color: grey['800'],
  lineHeight: 1.5,
  letterSpacing: 0,
});

const TagTypo = styled(Typography)({
  fontSize: 14,
  fontWeight: 400,
  color: orange['400'],
  lineHeight: 1.5,
  letterSpacing: 0,
  cursor: 'pointer',

  '&:hover': {
    color: grey['800'],
    transition: '0.7s',
  },
});
