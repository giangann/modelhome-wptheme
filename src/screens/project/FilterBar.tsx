import { Box, Divider, Stack } from '@mui/material';
import React from 'react';
import { orange } from '../../libs';
import { MontserratTypo, OswaldTypo } from '../../styled';

export const FilterBar = () => {
  const filterBy = ['All', 'Architecture', 'Design', 'Interior', 'Landscape'];
  return (
    <Box>
      <MontserratTypo mb={2} fontWeight={700}>
        Filter by scope
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
