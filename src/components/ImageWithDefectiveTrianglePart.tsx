import { Box } from '@mui/material';
import { TriangleByBorder } from '../styled';

export const ImageWithDefectiveTrianglePart = () => {
  const testImage =
    'https://measured.ca/wp-content/uploads/1709-RiftHouse-Web-RearSquareDay-PhotographerEmaPeter.jpg';
  return (
    <Box
      position="relative"
      sx={{
        // 
        width:'100%',
        height:300,
        // 
        backgroundImage: `url(${testImage})`,
        backgroundSize:'cover'
      }}
    >
        <TriangleByBorder defectivePosition='right'/>
    </Box>
  );
};
