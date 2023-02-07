import { Box, Button, Stack } from '@mui/material';
import { orange } from '../../libs';
import {
  btnTextStyle,
  OrangeBtn,
  OrangeContainedBtn,
  OrangeOutlinedBtn,
  OswaldSubtitle,
  OswaldTypo,
  OswaldTypoHeaddingBanner,
} from '../../styled';

export const Banner = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        component="img"
        src="https://ld-wp.template-help.com/wordpress_free/23520/wp-content/uploads/2019/04/slide-1.jpg"
        style={{
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
        }}
      />
      {/* black layer */}
      <Box
        sx={{
          backgroundColor: 'black',
          opacity: 0.4,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
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
        <Stack spacing={4}>
          <OswaldTypoHeaddingBanner sx={{ color: 'white', whiteSpace: 'nowrap' }}>
            MODEL HOME
          </OswaldTypoHeaddingBanner>
          <OswaldSubtitle sx={{ color: 'white', textAlign: 'center' }}>
            Đẹp - Hiện Đại - Sang Trọng
          </OswaldSubtitle>
          <Box sx={{ display: 'flex', jusitfyContent: 'center', width: '100%' }}>
            <OrangeContainedBtn sx={{ padding: '16px 48px', margin: 'auto' }}>
              <OswaldTypo sx={{ ...btnTextStyle }}>Xem thêm</OswaldTypo>
            </OrangeContainedBtn>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
