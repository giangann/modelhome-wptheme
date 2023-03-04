import { Box, Container, Grid, TextField } from '@mui/material';
import {
  MontserratDashboardTitle,
  MontserratTypoContent,
  OswaldSubtitle,
  OswaldTypo,
} from '../../styled';

export const ManageHomepage = () => {
  const introduceImage =
    'https://ld-wp.template-help.com/wordpress_free/23520/wp-content/uploads/2019/04/about.jpg';
  return (
    <Container sx={{ paddingTop: 4 }}>
      <MontserratDashboardTitle>Quản lý Trang chủ</MontserratDashboardTitle>

      {/* Phần banner */}
      <Box>
        <OswaldTypo>Phần banner</OswaldTypo>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <MontserratTypoContent sx={{ color: 'black' }}>Ảnh nền</MontserratTypoContent>
            <img
              src={introduceImage}
              alt="introduce"
              style={{ marginBottom: 40, maxWidth: '100%' }}
            />
          </Grid>
          <Grid item xs={6}>
            <MontserratTypoContent sx={{ color: 'black' }}>Slogan</MontserratTypoContent>
            <TextField
              fullWidth
              placeholder="Slogan"
              value="Độc đáo - Hiện Đại - Sang Trọng"
              type="text"
            />
          </Grid>
        </Grid>
      </Box>

      {/* Phần về chúng tôi */}
      <OswaldTypo>Phần Về chúng tôi</OswaldTypo>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <MontserratTypoContent>Title</MontserratTypoContent>
          <TextField
            fullWidth
            placeholder="Title"
            value="Độc đáo - Hiện Đại - Sang Trọng"
            type="text"
          />
        </Grid>
        <Grid item xs={6}>
          <MontserratTypoContent>Subtitle</MontserratTypoContent>
          <TextField
            fullWidth
            placeholder="Title"
            value="Độc đáo - Hiện Đại - Sang Trọng"
            type="text"
          />
        </Grid>
        <Box width="100%" mt={3}>
          <MontserratTypoContent textAlign="center">Mô tả</MontserratTypoContent>
        </Box>
        <Grid item container xs={12} sx={{ paddingTop: '0px !important' }} spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              placeholder="Highlight"
              label="Highlight"
              value="Độc đáo - Hiện Đại - Sang Trọng"
              type="text"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Normal"
              placeholder="Normal"
              value="Độc đáo - Hiện Đại - Sang Trọng"
              type="text"
            />
          </Grid>
        </Grid>
      </Grid>

      <OswaldTypo>Manage Home Page</OswaldTypo>
      <OswaldTypo>Manage Home Page</OswaldTypo>
      <OswaldTypo>Manage Home Page</OswaldTypo>
      <OswaldTypo>Manage Home Page</OswaldTypo>
      <OswaldTypo>Manage Home Page</OswaldTypo>
      <OswaldTypo>Manage Home Page</OswaldTypo>
      <OswaldTypo>Manage Home Page</OswaldTypo>
      <OswaldTypo>Manage Home Page</OswaldTypo>
      <OswaldTypo>Manage Home Page</OswaldTypo>
      <OswaldTypo>Manage Home Page</OswaldTypo>
      <OswaldTypo>Manage Home Page</OswaldTypo>
      <OswaldTypo>Manage Home Page</OswaldTypo>
      <OswaldTypo>Manage Home Page</OswaldTypo>
      <OswaldTypo>Manage Home Page</OswaldTypo>
      <OswaldTypo>Manage Home Page</OswaldTypo>
    </Container>
  );
};
