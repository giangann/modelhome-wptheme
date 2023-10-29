import { Container, Grid } from '@mui/material';
import { useSetAtom } from 'jotai';
import { useQuery } from 'react-query';
import { Outlet } from 'react-router-dom';

import { BlogApiType, TagType } from '@/libs';
import { tagsAtom } from '@/libs/atom/data';

import { BlogSidebar } from './BlogSidebar';

export const Blog = () => {
  const setListTagsAtom = useSetAtom(tagsAtom);
  const { data: listTag } = useQuery<TagType[]>('tags', {
    onSuccess: (data: TagType[]) => {
      setListTagsAtom(data);
    },
  });

  const { data: listBlog, isLoading: isLoading } = useQuery<BlogApiType[]>('blogs');
  return (
    <Container sx={{ mt: 8 }}>
      <Grid container columnSpacing={4}>
        <Outlet context={{ listBlog: listBlog, isLoading: isLoading }} />
        <BlogSidebar listBlog={listBlog as BlogApiType[]} isLoading={isLoading} />
      </Grid>
    </Container>
  );
};
