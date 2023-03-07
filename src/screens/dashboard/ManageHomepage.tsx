import { Box, Button, Container, Grid, Stack } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Input } from '../../components/Input';
import { API_PREFIX, homePage } from '../../constant';
import { HomePageApiType, HomePageType } from '../../libs';
import {
  MontserratDashboardTitle,
  MontserratTypoContent,
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

  const { control, handleSubmit, getValues, watch, setValue, register } =
    useForm<HomePageType>({
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
        servicePart: {
          serviceProvide: [
            {
              image: '',
              link: '',
            },
            {
              image: '',
              link: '',
            },
            {
              image: '',
              link: '',
            },
          ],
          leftCard: {},
          rightCard: {},
        },
      },
    });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'servicePart.serviceProvide', // unique name for your Field Array
  });

  // const [serviceProvide, setServiceProvide] = useState(getValues)

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

      setValue('servicePart.serviceProvide', serviceData.serviceProvide);
      setValue('servicePart.leftCard', serviceData.leftCard);
      setValue('servicePart.rightCard', serviceData.rightCard);
    },
  });

  const onSubmit = async (value: any) => {
    console.log('value submit: ', value);
  };

  console.log('getVAlues', getValues('servicePart.leftCard'));

  const handleUpdate = async () => {
    const res = await axios.post(`${API_PREFIX}/home-page/update`, {
      banner: JSON.stringify(homePage.bannerPart),
      about_us: JSON.stringify(homePage.aboutPart),
      services: JSON.stringify(homePage.servicePart),
      projects: JSON.stringify(homePage.projectPart),
    });
  };

  console.log('{...register(`servicePart.serviceProvide.${index}.link`)}', {
    ...register(`servicePart.serviceProvide.${1}.link`),
  });
  return (
    <Container sx={{ paddingY: 4 }}>
      <MontserratDashboardTitle>Quản lý Trang chủ</MontserratDashboardTitle>
      <Button onClick={handleUpdate}>Test post</Button>

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
      <Box>
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
      </Box>

      {/* Phần dịch vụ */}
      <Box mt={4}>
        <OswaldTypo>Phần Dịch vụ</OswaldTypo>
        <Box mt={2}>
          <OswaldTypo>3 ảnh thumbnail</OswaldTypo>
          <Grid container spacing={2}>
            {getValues('servicePart.serviceProvide').map((item, index) => (
              <Grid item xs={6} sm={4} key={index}>
                <Box
                  sx={{
                    backgroundImage: `url(${item.image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: { xs: 300, sm: 500 },
                    width: '100%',
                  }}
                />
                {/* <Input
                key={index}
                nam={`servicePart.serviceProvide.${index}.link`}
                control={control}
              /> */}
                {/* <OswaldTypo color="black">{item.link}</OswaldTypo> */}
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box mt={2}>
          <OswaldTypo>Thẻ bên trái</OswaldTypo>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4}>
              <Input
                fullWidth
                name="servicePart.leftCard.subTitle"
                control={control}
                label="Title"
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <Input
                fullWidth
                name="servicePart.leftCard.title"
                control={control}
                label="Subtitle"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Input
                fullWidth
                name="servicePart.leftCard.description"
                control={control}
                label="Description"
                maxRows={4}
                multiline
              />
            </Grid>
          </Grid>
        </Box>

        <Box mt={2}>
          <OswaldTypo>Thẻ bên phải</OswaldTypo>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={4}>
              <Input
                fullWidth
                name="servicePart.rightCard.subTitle"
                control={control}
                label="Title"
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <Input
                fullWidth
                name="servicePart.rightCard.title"
                control={control}
                label="Subtitle"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Input
                fullWidth
                name="servicePart.rightCard.description"
                control={control}
                label="Description"
                maxRows={4}
                multiline
              />
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box>
        <Stack direction="row" justifyContent="flex-start">
          <Button variant="contained" onClick={handleSubmit(onSubmit)}>Save</Button>
        </Stack>
      </Box>
    </Container>
  );
};
