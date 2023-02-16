import { Box, Container, Grid, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { HeadingBlock } from '../../components';
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

  const navigate = useNavigate();
  return (
    <Box sx={{ zIndex: 6, position: 'relative' }}>
      <Container sx={{ marginTop: 12 }}>
        <Grid container columnSpacing={12}>
          <Grid item xs={12} sm={5} mb={{ xs: 2.5, sm: 'none' }}>
            <HeadingBlock subTitle="Hồ sơ" title="Các dự án của Model Home" />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Stack spacing={2}>
              <MontserratTypo sx={{ fontSize: 14, fontWeight: 300, lineHeight: '30px' }}>
                Nhà đẹp cần có thiết kế đẹp” Bạn đang quan tâm đến thiết kế nội thất là
                bạn đang tiết kiệm chi phí đầu tư vào thi công và đảm bảo có một căn nhà
                đẹp trong thời gian dài. Giá thiết kế nếu so với chi phí thi công thì
                không nhiều, bạn chọn đơn vị thiết kế giá rẻ thì tương đương chất lượng
                cũng rẻ. Với MoreHome chúng tôi không làm chạy theo số lượng mà đặt vấn đề
                chất lượng lên hàng đầu. Vì vậy bạn hãy lựa chọn phù hợp với mong chờ của
                bạn. Chương trình khuyến mãi đặc biệt giảm 50% phí thiết kế nội thất cho
                những khách sử dụng dịch vụ thi công nội thất tổng thể khi thiết kế nội
                thất.
              </MontserratTypo>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Grid container sx={{ marginY: 4 }} spacing={2} p={2}>
        {thumbnailsOfProjects.map((thumb, index) => (
          <Grid key={index} item xs={12} sm={4}>
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
        <OrangeOutlinedBtn
          onClick={() => navigate('/project')}
          sx={{ padding: '16px 48px', margin: 'auto' }}
        >
          <OswaldTypo sx={{ ...btnTextStyle }}>Xem thêm</OswaldTypo>
        </OrangeOutlinedBtn>
      </Box>
    </Box>
  );
};
