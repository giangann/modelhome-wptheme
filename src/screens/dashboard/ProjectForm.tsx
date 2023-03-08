import { Box, Button, Container, FormLabel, Grid } from '@mui/material';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { Input } from '../../components/Input';
import { API_PREFIX } from '../../constant';
import { ProjectApiType } from '../../libs';
import { MontserratDashboardTitle, OswaldTypo } from '../../styled';
export const ProjectForm = () => {
  const navigate = useNavigate();

  const { control, setValue, getValues } = useForm<ProjectApiType>({
    defaultValues: {},
  });

  const params = useParams();
  const isEdit = params?.id ? true : false;
  const tempThumb =
    'https://measured.ca/wp-content/uploads/1508-CubeHouse-Web-Rear-Entry-Square-Photographer-Ema-Peter.jpg';

  if (isEdit)
    useQuery(`/post/${params.id}`, {
      onSuccess: (project: ProjectApiType) => {
        setValue('thumb', tempThumb);
        setValue('name', project.name);
        setValue('summary', project.summary);
        setValue('slug', project.slug);
        setValue('location', project.location);
        setValue('finish_in', project.finish_in);
        setValue('customer', project.customer);
        setValue('square', project.square);
        setValue('is_main', project.is_main);
      },
    });

  const handleGoBack = () => {
    navigate('/dashboard/manage-project');
  };
  const handleChange = (content: any) => {
    // console.log('content', content);
  };
  const handleSave = async (content: any) => {
    const res = await axios.post(`${API_PREFIX}/posts/create`, {
      postable_type: 'Project',
      postable_id: 1,
      content: content,
    });
  };

  return (
    <Container sx={{ paddingY: 4 }}>
      <MontserratDashboardTitle>Thêm mới dự án</MontserratDashboardTitle>
      <Button variant="outlined" onClick={handleGoBack}>
        &lt; Trở lại
      </Button>
      <Grid container spacing={2} sx={{ my: 4, mb: 6 }}>
        <Grid item xs={12} sm={6}>
          <FormLabel>Thumb</FormLabel>
          <Box
            sx={{
              backgroundImage: `url(${tempThumb})`,
              backgroundSize: 'cover',
              width: '50%',
              height: '90%',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            control={control}
            name="summary"
            fullWidth
            label="Mô tả ngắn"
            multiline
            rows={10}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input control={control} name="name" fullWidth label="Tên" />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Input control={control} name="slug" fullWidth label="URL" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input control={control} name="location" fullWidth label="Địa điểm" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input control={control} name="finish_in" fullWidth label="Hoàn thành lúc" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input control={control} name="customer" fullWidth label="Khách hàng" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input control={control} name="square" fullWidth label="Diện tích" />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <Input control={control} name="is_main" fullWidth label="Customer" />
        </Grid> */}
      </Grid>

      <Box>
        <OswaldTypo mb={2}>Viết bài mô tả chi tiết dự án</OswaldTypo>
        <SunEditor
          // lang="en"
          width="100%"
          height="100%"
          autoFocus={true}
          placeholder="Please type here..."
          onChange={handleChange}
          setOptions={{
            buttonList: [
              [
                'bold',
                'underline',
                'table',
                'image',
                'video',
                'audio',
                'codeView',
                'preview',
                'save',
              ],
            ],
          }}
          onSave={handleSave}
        />
      </Box>
    </Container>
  );
};
