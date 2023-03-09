import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Outlet } from 'react-router-dom';

import { CustomDrawer } from '../../components';
import { API_PREFIX, homePage } from '../../constant';

const drawerWidth = 240;
export const Dashboard = () => {
  // 1. Manage Project: List project, Detail project, Image

  // 2. Manage Blog: List Blog, Detail Blog, Comment, Tag,...

  // List of Image, type of each image

  // Quản lý nội dung trang chủ:
  // 1. Banner: ảnh nền + Slogan
  // 2. Phần Về chúng tôi: title+ subtitle + description <highlight(description) + normal>
  // 3. Phần dịch vụ: 3 (ảnh + tiêu đề), 2 thẻ nội dung (title+subtitle+ description <highlight(optional) + normal>)
  // 4. Phần dự án: 6 dự án nổi bật

  // Quản lý nội dung trang về chúng tôi:
  // 1. Giới thiệu chung: title+ subtitle + description <highlight(description) + normal> + 1 ảnh
  // 2. Triết lý + cột mốc
  // 2.1: Triết lý: title + subTitle + description (3 key-values)
  // 2.2: Cột mốc quan trọng : title + subTitle + description (4 key-values)
  //      358
  //      DỰ ÁN HOÀN THÀNH
  //      28
  //      KIẾN TRÚC SƯ CHẤT LƯỢNG
  //      18
  //      NĂM KINH NGHIỆM TRONG NGÀNH
  //      724
  //      KHÁCH HÀNG

  // Quản lý nội dung phần liên hệ:
  // Title
  // Subtitle
  // Description: key-values

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const drawerItems = [
    {
      name: 'Quản lý Home Page',
      link: '/dashboard',
    },
    {
      name: 'Quản lý About Page',
      link: '/dashboard/manage-about-page',
    },
    {
      name: 'Quản lý danh sách dự án',
      link: '/dashboard/manage-project',
    },
    {
      name: 'Quản lý bài viết',
      link: '/dashboard/manage-blog',
    },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Toogle drawer in mobile */}
      <Button onClick={() => setOpenDrawer(true)}>Open</Button>
      <CustomDrawer
        open={openDrawer}
        onClose={handleCloseDrawer}
        item={drawerItems}
        variant={isMobile ? 'temporary' : 'permanent'}
        sx={
          isMobile
            ? {}
            : {
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                },
              }
        }
      />

      <Outlet />
    </Box>
  );
};
