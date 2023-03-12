import 'suneditor/dist/css/suneditor.min.css';

import { Box, Button, Container } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import SunEditor from 'suneditor-react';

import { ReactTableWithToolBar } from '../../components/ReactTable';
import { API_PREFIX, STORAGE_PREFIX } from '../../constant';
import { MontserratDashboardTitle, OswaldTypo } from '../../styled';

export const ManageProject = () => {
  const navigate = useNavigate();

  const { data: listProject, isLoading: isLoading } = useQuery('projects');

  const columns = React.useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id', // accessor is the "key" in the data
        width: 10,
        sticky: 'left',
      },
      {
        Header: 'Tên dự án',
        accessor: 'name', // accessor is the "key" in the data
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
              src={`${STORAGE_PREFIX}/${value}`}
              style={{ maxWidth: '100%', objectFit: 'cover', objectPosition: 'center' }}
              alt="thumb"
            />
          );
        },
        sticky: 'left',
      },
      {
        Header: 'Đường dẫn',
        accessor: 'slug', // accessor is the "key" in the data
        width: 100,
        sticky: 'left',
      },
      {
        Header: 'Giới thiệu',
        accessor: 'summary', // accessor is the "key" in the data
        width: 400,
        sticky: 'left',
      },
      // {
      //   Header: t('form.money'),
      //   accessor: 'money', // accessor is the "key" in the data
      //   width: 50,
      //   Cell: ({ value }: { value: number }) => {
      //     return `${numberWithCommas(value)}đ`
      //   },
      //   sticky: 'left',
      // },
      // {
      //   Header: t('form.status'),
      //   accessor: 'status', // accessor is the "key" in the data
      //   width: 100,
      //   Cell: ({ value }: { value: number }) => {
      //     return <StatusTag value={value} />
      //   },
      //   sticky: 'left',
      // },
      // {
      //   Header: t('form.created_at'),
      //   accessor: 'created_at', // accessor is the "key" in the data
      //   width: 150,
      //   Cell: ({ row }: { row: any }) => {
      //     const asiaDate = convertDatetimeTZWithoutSecond(row.original.created_at)
      //     return asiaDate
      //   },
      //   sticky: 'left',
      // },
      // {
      //   Header: t('form.updated_at'),
      //   accessor: 'updated_at', // accessor is the "key" in the data
      //   width: 150,
      //   Cell: ({ row }: { row: any }) => {
      //     const asiaDate = convertDatetimeTZWithoutSecond(row.original.updated_at)
      //     return asiaDate
      //   },
      //   sticky: 'left',
      // },
    ],
    [],
  );
  const handleCreate = () => {
    navigate('/dashboard/new-project');
  };
  const handleChange = (content: any) => {
    console.log('content', content);
  };
  const handleSave = async (content: any) => {
    console.log('save content', content);
    const res = await axios.post(`${API_PREFIX}/posts/create`, {
      postable_type: 'Project',
      postable_id: 1,
      content: content,
    });

    console.log('res of save', res);
    // if (res.s)
  };
  return (
    <Container sx={{ paddingY: 4 }}>
      <MontserratDashboardTitle>Quản lý Dự án</MontserratDashboardTitle>
      <Button variant="outlined" onClick={handleCreate}>
        + Tạo mới
      </Button>
      <ReactTableWithToolBar
        columns={columns}
        data={listProject || ([] as any)}
        isLoading={isLoading}
        // onRowClick={onRowClick}
        sxCustom={{ padding: 0 }}
      />
    </Container>
  );
};
