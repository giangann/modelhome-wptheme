import './blog.css';

import { Grid } from '@mui/material';
import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { BlogApiType } from '@/libs';
import { postsAtom } from '@/libs/atom/data';

import { BlogItem } from './BlogItem';

export const BlogDetail = () => {
  const params = useParams();
  const listPosts = useAtomValue(postsAtom);

  const { data: blogData, isLoading: isLoading } = useQuery<BlogApiType>(
    `blogs/get-by-slug/${params.slug}`,
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
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
