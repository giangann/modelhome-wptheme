import { Box, Button } from '@mui/material';

import { centerDiv, LayerBox, MulishTypo } from '../styled';

type ImageUploadProps = {
  image: string;
  handleSetImage: (file: any) => void;
};
export const ImageUpload = (props: ImageUploadProps) => {
  const { image, handleSetImage } = props;
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
      }}
    >
      <LayerBox sx={{ cursor: 'pointer', ...centerDiv }}>
        <Button variant="outlined" component="label">
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={(e) => {
              const listFile = e.target.files as FileList;
              const file = listFile[0];
              handleSetImage(file);
            }}
          />
          <MulishTypo>Click to upload image</MulishTypo>
        </Button>
      </LayerBox>
    </Box>
  );
};
