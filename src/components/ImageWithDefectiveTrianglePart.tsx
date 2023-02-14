import { Box, SxProps } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DefectivePositionType } from '../libs';
import { TriangleByBorder } from '../styled';

export type ImageWithDefectiveTrianglePartProps = {
  defectivePosition: DefectivePositionType;
  image: string;
  onNavigate?: () => void;
} & SxProps;
export const ImageWithDefectiveTrianglePart = (
  props: ImageWithDefectiveTrianglePartProps,
) => {
  const { defectivePosition, image, onNavigate, ...sxProps } = props;
  const navigate = useNavigate();
  const testImage =
    'https://measured.ca/wp-content/uploads/1709-RiftHouse-Web-RearSquareDay-PhotographerEmaPeter.jpg';
  return (
    <Box
      component="div"
      position="relative"
      onClick={onNavigate}
      sx={{
        cursor: 'pointer',
        //
        width: '100%',
        height: 400, // default if not props height
        //
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        ...sxProps,
      }}
    >
      <TriangleByBorder defectivePosition={defectivePosition} />
    </Box>
  );
};
