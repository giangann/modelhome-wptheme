import { BlogApiType } from '@/libs';
import { postsAtom } from '@/libs/atom/data';
import { Grid } from '@mui/material';
import { useAtomValue } from 'jotai';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { BlogItem } from './BlogItem';

export const BlogDetail = () => {
  const params = useParams();
  const listPosts = useAtomValue(postsAtom);

  const { data: blogData, isLoading: isLoading } = useQuery<BlogApiType>(
    `blogs/get-by-slug/${params.slug}`,
  );
  return (
    <>
      {isLoading ? (
        'Loading'
      ) : (
        <Grid item xs={12} sm={7}>
          <BlogItem
            blog={blogData as BlogApiType}
            isDetail={true}
            content={blogData?.post_id ? listPosts[blogData?.post_id].content : ''}
          />
        </Grid>
      )}
    </>
  );
};

