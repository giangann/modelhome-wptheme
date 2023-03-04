import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { OswaldTypoHeaddingBanner } from '../../styled';

export const Dashboard = () => {
  // 1. Manage Project: List project, Detail project, Image

  // 2. Manage Blog: List Blog, Detail Blog, Comment, Tag,...

  // List of Image, type of each image

  // Quản lý nội dung trang chủ:
  // 1. Banner: ảnh nền + Slogan
  // 2. Phần Về chúng tôi: title+ subtitle + description
  // 3. Phần dịch vụ: 3 (ảnh + tiêu đề), 2 thẻ nội dung (title+subtitle+ description)
  // 4. Phần dự án: 6 dự án nổi bật

  // Quản lý nội dung trang về chúng tôi:
// 1. 
  return (
    <Box>
      <OswaldTypoHeaddingBanner>Dashboard</OswaldTypoHeaddingBanner>
      <Outlet />
    </Box>
  );
};
