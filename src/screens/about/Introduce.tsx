import { Box, Container, Grid, Stack } from '@mui/material';
import { HeadingBlock } from '../../components';
import { MontserratTypoContent } from '../../styled';
export const Introduce = () => {
  const introduceImage =
    'https://ld-wp.template-help.com/wordpress_free/23520/wp-content/uploads/2019/04/about.jpg';
  return (
    <Container sx={{ marginTop: { xs: 8, sm: 12 }, maxWidth: '1000px !important' }}>
      <Grid container columnSpacing={4}>
        <Grid item xs={12} sm={5} mb={{ xs: 2.5, sm: 'none' }}>
          <HeadingBlock
            subTitle="Về công ty"
            title="Chúng tôi tạo ra và hiện thực hóa ý tưởng"
          />
        </Grid>

        <Grid item xs={12} sm={7}>
          <img src={introduceImage} alt="introduce" style={{ marginBottom: 40 }} />
          <Stack spacing={4}>
            <MontserratTypoContent sx={{ fontWeight: 500 }}>
              Có rất nhiều phong cách nội thất chung cư cho bạn lựa chọn: Phong cách nội
              thất hiện đại, phong cách nội thất tân cổ điển, phong cách nội thất
              Indochine, Wabi sabi, Minimalism, Bắc Âu...Bạn vui lòng tham khảo các mẫu
              thiết kế nội thất chung cư tại đây
            </MontserratTypoContent>
            <MontserratTypoContent>
              Bạn đang muốn tìm ý tưởng thiết kế nội thất cho chung cư, biệt thự, nhà phố,
              nhà liền kề, khách sạn, nhà hàng, showroom? MoreHome mong muốn được hỗ trợ
              và đồng hành cùng bạn từ khâu thiết kế nội thất đến thi công nội thất.
              MoreHome với nhiều năm kinh nghiệm trong nghề luôn luôn cải tiến, và tìm tòi
              những giải pháp và công nghệ để công việc ngày một hiệu quả mang lại nhiều
              giá trị cho khách hàng.
            </MontserratTypoContent>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};
