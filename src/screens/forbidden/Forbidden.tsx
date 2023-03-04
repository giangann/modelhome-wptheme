import { Box } from '@mui/material';
import { centerDiv, OswaldTypo } from '../../styled';

export const Forbidden = () => {
  return (
    <Box sx={{ ...centerDiv }}>
      <OswaldTypo fontSize={80} fontWeight={900} color="black">
        Forbidden
      </OswaldTypo>
    </Box>
  );
};
