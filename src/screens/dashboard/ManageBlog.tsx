import { Button, Container } from '@mui/material';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { Row as RowProps } from 'react-table';

import { BlogApiType, ProjectApiType } from '@/libs';

import { ReactTableWithToolBar } from '../../components/ReactTable';
import { STORAGE_PREFIX } from '../../constant';
import { MontserratDashboardTitle } from '../../styled';

export const ManageBlog = () => {
  const navigate = useNavigate();

  const { data: listBlog, isLoading: isLoading } = useQuery('blogs');

  const columns = React.useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id', // accessor is the "key" in the data
        width: 10,
        sticky: 'left',
      },
      {
        Header: 'Tiêu đề',
        accessor: 'title', // accessor is the "key" in the data
        width: 100,
        sticky: 'left',
      },
      {
        Header: 'Ảnh thumbnail',
        accessor: 'thumb', // accessor is the "key" in the data
        width: 50,
        Cell: ({ value }: { value: string }) => {
          return (
            <img
              loading="lazy"
              src={`${STORAGE_PREFIX}/${value}`}
              style={{ maxWidth: '100%', objectFit: 'cover', objectPosition: 'center' }}
              alt="thumb"
            />
          );
        },
        sticky: 'left',
      },
      {
        Header: 'Tác giả',
        accessor: 'author', // accessor is the "key" in the data
        width: 100,
        sticky: 'left',
      },
      {
        Header: 'Tóm tắt',
        accessor: 'summary', // accessor is the "key" in the data
        width: 400,
        sticky: 'left',
      },
    ],
    [],
  );

  const onRowClick = (row: RowProps<BlogApiType>) => {
    navigate(`/dashboard/blog/${row.values.id}`);
  };
  const handleCreate = () => {
    navigate('/dashboard/new-blog');
  };
  return (
    <Container sx={{ paddingY: 4 }}>
      <MontserratDashboardTitle>Quản lý Blog</MontserratDashboardTitle>
      <Button variant="outlined" onClick={handleCreate}>
        + Tạo mới
      </Button>
      <ReactTableWithToolBar
        columns={columns}
        data={listBlog || ([] as any)}
        isLoading={isLoading}
        onRowClick={onRowClick}
        sxCustom={{ padding: 0 }}
      />
    </Container>
  );
};
