import { Box, Container, Grid, Stack, TextField, Typography } from '@mui/material';

import { Line, TextFieldWithCustomFont } from '../components';
import {
  OswaldTypo,
  OswaldTypoHeadding,
  OswaldTypoHeaddingFooter,
  PoppinsOrangeSpan,
  PoppinsTypo,
} from '../styled';

export const Footer = () => {
  return (
    <Container>
      <Grid container spacing={12}>
        <Grid item xs={12} sm={4}>
          <Stack justifyContent="space-between" sx={{ height: '100%' }}>
            {/* Title */}
            <Stack spacing={3}>
              <OswaldTypo sx={{ fontSize: 16 }}>Liên hệ với chúng tôi</OswaldTypo>
              <OswaldTypoHeaddingFooter variant="h4">
                THÔNG TIN CHI TIẾT
              </OswaldTypoHeaddingFooter>
              <Line width="15%" />
            </Stack>

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
            <TextFieldWithCustomFont placeholder="Your Name" fontName="Montserrat" />
            <TextFieldWithCustomFont placeholder="Your E-mail" fontName="Montserrat" />
            <TextFieldWithCustomFont
              placeholder="Your Message"
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
