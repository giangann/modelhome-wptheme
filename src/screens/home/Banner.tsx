import { Box, Stack } from '@mui/material';

import { IMAGE_FOLDER_PATH } from '../../constant';
import {
  btnTextStyle,
  LayerBox,
  OrangeContainedBtn,
  OswaldSubtitle,
  OswaldTypo,
  OswaldTypoHeaddingBanner,
} from '../../styled';

export const Banner = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        component="img"
        src={`${IMAGE_FOLDER_PATH}/home_banner.jpg`}
        style={{
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
        }}
      />
      {/* black layer */}
      <LayerBox
        sx={{
          backgroundColor: 'black',
          opacity: 0.5,
        }}
      />

      {/* text */}
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
        }}
      >
        <Box>
          <OswaldTypoHeaddingBanner sx={{ color: 'white', whiteSpace: 'nowrap' }}>
            MODEL HOME
          </OswaldTypoHeaddingBanner>
          <OswaldSubtitle sx={{ color: 'white', textAlign: 'center' }}>
            Độc đáo - Hiện Đại - Sang Trọng
          </OswaldSubtitle>
          <Box sx={{ display: 'flex', jusitfyContent: 'center', width: '100%', mt: 6 }}>
            <OrangeContainedBtn
              href="/about"
              sx={{ padding: '16px 48px', margin: 'auto' }}
            >
              <OswaldTypo sx={{ ...btnTextStyle }}>Xem thêm</OswaldTypo>
            </OrangeContainedBtn>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
