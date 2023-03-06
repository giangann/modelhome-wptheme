import { Box, Container, Grid, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Input } from '../../components/Input';
import { HomePageApiType, HomePageType } from '../../libs';
import {
  MontserratDashboardTitle,
  MontserratTypoContent,
  OswaldSubtitle,
  OswaldTypo,
} from '../../styled';

// function nestedLoop(obj) {
//   const res = {};
//   function recurse(obj, current) {
//     for (const key in obj) {
//       let value = obj[key];
//       if (value != undefined) {
//         if (value && typeof value === 'object') {
//           recurse(value, key);
//         } else {
//           // Do your stuff here to var value
//           res[key] = value;
//         }
//       }
//     }
//   }
//   recurse(obj);
//   return res;
// }

export const ManageHomepage = () => {
  const introduceImage =
    'https://ld-wp.template-help.com/wordpress_free/23520/wp-content/uploads/2019/04/about.jpg';

  const { control, handleSubmit, getValues, watch, setValue } = useForm<HomePageType>({
    defaultValues: {
      bannerPart: {
        slogan: '',
        backgroundImg: '',
      },
      aboutPart: {
        title: '',
        subTitle: '',
        description: {
          highlight: '',
          normal: '',
        },
      },
    },
  });

  const { data: homePageData } = useQuery('home-page', {
    onSuccess: (value: HomePageApiType) => {
      const bannerData = JSON.parse(value.banner);
      const aboutData = JSON.parse(value.about_us);
      const serviceData = JSON.parse(value.services);
      const projectData = JSON.parse(value.projects);

      console.log('value', value);
      setValue('bannerPart.backgroundImg', bannerData.backgroundImg);
      setValue('bannerPart.slogan', bannerData.slogan);
      setValue('aboutPart.title', aboutData.title);
      setValue('aboutPart.subTitle', aboutData.subTitle);
      setValue('aboutPart.description.highlight', aboutData.description.highlight);
      setValue('aboutPart.description.normal', aboutData.description.normal);
    },
  });
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
            <Input
              control={control}
              name="bannerPart.slogan"
              fullWidth
              placeholder="Slogan"
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
          <Input
            control={control}
            name="aboutPart.title"
            fullWidth
            placeholder="Title"
            type="text"
            multiline
          />
        </Grid>
        <Grid item xs={6}>
          <MontserratTypoContent>Subtitle</MontserratTypoContent>
          <Input
            control={control}
            name="aboutPart.subTitle"
            fullWidth
            placeholder="Title"
            type="text"
          />
        </Grid>
        <Box width="100%" mt={3}>
          <MontserratTypoContent textAlign="center">Mô tả</MontserratTypoContent>
        </Box>
        <Grid item container xs={12} sx={{ paddingTop: '0px !important' }} spacing={2}>
          <Grid item xs={6}>
            <Input
              control={control}
              name="aboutPart.description.highlight"
              fullWidth
              placeholder="Highlight"
              label="Highlight"
              type="text"
              multiline
              maxRows={5}
              minRows={5}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              control={control}
              name="aboutPart.description.normal"
              fullWidth
              label="Normal"
              placeholder="Normal"
              type="text"
              multiline
              maxRows={5}
              minRows={5}
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
