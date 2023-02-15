import { Box } from '@mui/material';

import { orange } from '../libs';

export const Line = (props: React.CSSProperties) => {
  return <Box sx={{ height: '4px', backgroundColor: orange['400'], ...props }} />;
};
