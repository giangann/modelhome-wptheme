import { Box, Divider, Stack } from '@mui/material';
import React from 'react';
import { orange } from '../../libs';
import { MontserratTypo, OswaldTypo } from '../../styled';

export const FilterBar = () => {
  const filterBy = ['Tất cả', 'Thiết kế', 'Thi công', 'Kiến trúc', 'Nâng cấp'];
  return (
    <Box>
      <MontserratTypo mb={2} fontWeight={700}>
        Lọc theo loại dự án
      </MontserratTypo>
      <Stack direction="row" spacing={1}>
        {filterBy.map((item, index) => (
          <React.Fragment key={index}>
            <MontserratTypo
              sx={{
                '&:hover': {
                  color: orange['400'],
                  cursor: 'pointer',
                },
              }}
              fontSize={14}
            >
              {item}
            </MontserratTypo>
            <Divider orientation="vertical" flexItem sx={{ backgroundColor: 'black' }} />
          </React.Fragment>
        ))}
      </Stack>
    </Box>
  );
};
