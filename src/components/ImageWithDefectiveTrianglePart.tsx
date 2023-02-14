import { Box, SxProps } from '@mui/material';
import { DefectivePositionType } from '../libs';
import { TriangleByBorder } from '../styled';

export type ImageWithDefectiveTrianglePartProps = {
  defectivePosition: DefectivePositionType;
  image: string;
} & SxProps;
export const ImageWithDefectiveTrianglePart = (
  props: ImageWithDefectiveTrianglePartProps,
) => {
  const { defectivePosition, image, ...sxProps } = props;
  const testImage =
    'https://measured.ca/wp-content/uploads/1709-RiftHouse-Web-RearSquareDay-PhotographerEmaPeter.jpg';
  return (
    <Box
      position="relative"
      sx={{
        //
        width: '100%',
        height: 400,
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
