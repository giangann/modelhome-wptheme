import { Box, Container, Grid, Stack } from '@mui/material';
import {
  btnTextStyle,
  MontserratTypo,
  OrangeOutlinedBtn,
  OswaldTypo,
  OswaldTypoHeaddingContent,
} from '../../styled';
export const OurProjects = () => {
  const thumbnailsOfProjects = [
    {
      image:
        'https://ld-wp.template-help.com/wordpress_free/23520/wp-content/uploads/2019/04/gallery-1-600x616.jpg',
      link: '#',
    },
    {
      image:
        'https://ld-wp.template-help.com/wordpress_free/23520/wp-content/uploads/2019/04/gallery-2-600x616.jpg',
      link: '#',
    },
    {
      image:
        'https://ld-wp.template-help.com/wordpress_free/23520/wp-content/uploads/2019/04/gallery-3-600x616.jpg',
      link: '#',
    },
    {
      image:
        'https://ld-wp.template-help.com/wordpress_free/23520/wp-content/uploads/2019/04/gallery-4-600x616.jpg',
      link: '#',
    },
    {
      image:
        'https://ld-wp.template-help.com/wordpress_free/23520/wp-content/uploads/2019/04/gallery-5-600x616.jpg',
      link: '#',
    },
    {
      image:
        'https://ld-wp.template-help.com/wordpress_free/23520/wp-content/uploads/2019/04/gallery-6-600x616.jpg',
      link: '#',
    },
  ];
  return (
    <Box sx={{ zIndex: 6, position: 'relative' }}>
      <Container sx={{ marginTop: 12 }}>
        <OswaldTypo sx={{ fontSize: 14, mb: 2 }}>HỒ SƠ</OswaldTypo>
        <Grid container columnSpacing={12}>
          <Grid item xs={12} sm={5}>
            <OswaldTypoHeaddingContent>
              CÁC DỰ ÁN <br />
              CỦA MODEL HOME
            </OswaldTypoHeaddingContent>
          </Grid>

          <Grid item xs={12} sm={7}>
            <Stack spacing={2}>
              <MontserratTypo sx={{ fontSize: 14, fontWeight: 300, lineHeight: '30px' }}>
                All our team collaborates with our clients, across all of our 3 offices,
                which are located throughout the US. Our mission is to implement the
                outstanding design ideas and solutions for any project we’re working on…
                During that process we carefully combine client’s guidelines, technical
                possibilities, as well as the environmental issues. Engineering and
                interior design solutions that we deliver are usually born after a
                collaborative process.
              </MontserratTypo>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Grid container sx={{ marginY: 4 }} spacing={2} p={2}>
        {thumbnailsOfProjects.map((thumb, index) => (
          <Grid key={index} item xs={4}>
            <Box
              component="img"
              src={thumb.image}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
        <OrangeOutlinedBtn sx={{ padding: '16px 48px', margin: 'auto' }}>
          <OswaldTypo sx={{ ...btnTextStyle }}>Xem thêm</OswaldTypo>
        </OrangeOutlinedBtn>
      </Box>
    </Box>
  );
};
