import { Box, Typography } from '@mui/material';

import { centerDiv, MulishTypo } from '../styled';

export const EmptyContent = () => {
  return (
    <Box sx={{ height: '100vh', ...centerDiv, backgroundColor: '#0000000a' }}>
      <MulishTypo>
        Bài viết hiện tại đang trong quá trình cập nhật, vui lòng quay lại sau!
      </MulishTypo>
    </Box>
  );
};
