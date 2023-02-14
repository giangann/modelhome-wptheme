import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { OswaldTypo } from '../../styled';

export const ProjectDetail = () => {
  const params = useParams();
  console.log(params);
  return (
    <Box>
      <OswaldTypo>Project Detail</OswaldTypo>
    </Box>
  );
};
