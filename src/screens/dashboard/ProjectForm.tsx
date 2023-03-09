import 'suneditor/dist/css/suneditor.min.css';

import {
  Box,
  Button,
  Container,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Switch,
} from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import SunEditor from 'suneditor-react';

import { BoxWithBackgroundAndLayer, ImageUpload } from '../../components';
import { Input } from '../../components/Input';
import { API_PREFIX, MODEL_TYPE } from '../../constant';
import { ProjectApiType } from '../../libs';
import { LayerBox, MontserratDashboardTitle, MulishTypo, OswaldTypo } from '../../styled';

const tempThumb =
  'https://measured.ca/wp-content/uploads/1508-CubeHouse-Web-Rear-Entry-Square-Photographer-Ema-Peter.jpg';
export const ProjectForm = () => {
  const navigate = useNavigate();

  const { control, setValue, getValues, handleSubmit } = useForm<ProjectApiType>({
    defaultValues: {},
  });

  const [imageFile, setImageFile] = useState(null);

  const params = useParams();
  const isEdit = params?.id ? true : false;

  if (isEdit)
    useQuery(`/project/${params.id}`, {
      onSuccess: (project: ProjectApiType) => {
        setValue('thumb', tempThumb);
        setValue('name', project.name);
        setValue('summary', project.summary);
        setValue('slug', project.slug);
        setValue('location', project.location);
        setValue('finish_in', project.finish_in);
        setValue('customer_name', project.customer_name);
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
      postable_type: MODEL_TYPE['PROJECT'],
      postable_id: 1,
      content: content,
    });
  };

  const onSubmit = async (value: ProjectApiType) => {
    console.log('value', value);

    const formData = new FormData();

    if (imageFile) {
      formData.append('thumb', imageFile);
    }

    Object.entries(value).forEach(([key, value]) => formData.append(key, value));

    console.log('formData value', formData.get('is_main'));
    const res = await axios.post(`${API_PREFIX}/projects`, formData);

    if (res.status === 201 || res.status === 200) {
      toast.success('Tạo mới thành công');
    }
  };

  return (
    <Container sx={{ paddingY: 4 }}>
      <MontserratDashboardTitle>Thêm mới dự án</MontserratDashboardTitle>
      <Button variant="outlined" onClick={handleGoBack}>
        &lt; Trở lại
      </Button>
      <Grid container spacing={2} sx={{ my: 4, mb: 6 }}>
        <Grid item xs={12} sm={6} sx={{ position: 'relative' }}>
          <FormLabel>Thumb</FormLabel>
          <ImageUpload
            image={imageFile ? URL.createObjectURL(imageFile) : tempThumb}
            handleSetImage={(file: any) => setImageFile(file)}
          />
          {/* <BoxWithBackgroundAndLayer
            width="50%%"
            height="90%"
            sx={{
              backgroundImage: `url(${tempThumb})`,
              backgroundSize: 'cover',
              width: '50%',
              height: '90%',
            }}
          >
            <MulishTypo>This is content</MulishTypo>
          </BoxWithBackgroundAndLayer> */}
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
          <Input control={control} name="customer_name" fullWidth label="Khách hàng" />
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
          // autoFocus={true}
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

      <Box my={2}>
        <OswaldTypo mb={2}>Đánh dấu dự án nổi bật</OswaldTypo>
        <Box sx={{ display: 'flex' }}>
          <FormGroup>
            <FormControlLabel control={<Switch />} label="Dự án nổi bật" />
          </FormGroup>
        </Box>
      </Box>

      <Box my={4}>
        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          Save
        </Button>
      </Box>
    </Container>
  );
};
