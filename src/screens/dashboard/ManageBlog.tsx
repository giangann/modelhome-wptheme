import { Box, Container } from '@mui/material';
import { useQuery } from 'react-query';

import { MontserratDashboardTitle, OswaldTypo } from '../../styled';
export const ManageBlog = () => {
  const { data: testSunData } = useQuery('posts');

  console.log('test Sun Data', testSunData);

  function createMarkup() {
    return { __html: testSunData ? 'testSunData[3].content' : '' };
  }
  return (
    <Box sx={{ paddingY: 4 }}>
      <MontserratDashboardTitle>Quản lý Dự án</MontserratDashboardTitle>
      <div id="sunedit-area" dangerouslySetInnerHTML={createMarkup()} />{' '}
    </Box>
  );
};
