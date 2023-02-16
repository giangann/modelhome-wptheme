import { Box, Container, Grid, Stack } from '@mui/material';

import { HeadingBlock, Line, TextFieldWithCustomFont } from '../components';
import {
  OswaldTypo,
  OswaldTypoHeaddingFooter,
  PoppinsOrangeSpan,
  PoppinsTypo,
} from '../styled';

export const Footer = () => {
  return (
    <Container sx={{ marginTop: 12 }}>
      <Grid container columnSpacing={12} rowSpacing={6}>
        <Grid item xs={12} sm={4}>
          {/* Title */}
          <Box mb={2}>
            <HeadingBlock
              title={
                <OswaldTypoHeaddingFooter variant="h4" mb={{ xs: 4, sm: 4 }}>
                  THÔNG TIN CHI TIẾT
                </OswaldTypoHeaddingFooter>
              }
              subTitle="Liên hệ với chúng tôi"
            />
          </Box>

          <Stack justifyContent="space-between" sx={{ height: '100%' }}>
            {/* Contact */}
            <Stack spacing={2}>
              <PoppinsTypo>
                Điện thoại: <PoppinsOrangeSpan>0901521738</PoppinsOrangeSpan>
              </PoppinsTypo>
              <PoppinsTypo>
                E-mail: <PoppinsOrangeSpan>modelhome@gmail.com</PoppinsOrangeSpan>
              </PoppinsTypo>
              <PoppinsTypo>
                Địa chỉ: Số 4 ngõ 313 Quan Nhân, Thanh Xuân, Hà Nội
              </PoppinsTypo>
              <Box>
                <PoppinsTypo>Giờ làm việc:</PoppinsTypo>
                <PoppinsTypo>
                  Thứ 2 — Thứ 6 10:00 – 23:00; Thứ 7 — Chủ nhật 10:00 – 19:00
                </PoppinsTypo>
              </Box>
            </Stack>
          </Stack>
        </Grid>

        {/* Form */}
        <Grid item xs={12} sm={8}>
          <Stack spacing={2} justifyContent="space-between" sx={{ height: '100%' }}>
            <TextFieldWithCustomFont placeholder="Tên của bạn" fontName="Montserrat" />
            <TextFieldWithCustomFont placeholder="Địa chỉ Email" fontName="Montserrat" />
            <TextFieldWithCustomFont
              placeholder="Nội dung"
              fontName="Montserrat"
              multiline
              minRows={8}
            />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};
