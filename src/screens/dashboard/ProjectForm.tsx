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
import { API_PREFIX, convertRelatePathImage, MODEL_TYPE } from '../../constant';
import { ProjectApiType } from '../../libs';
import { LayerBox, MontserratDashboardTitle, MulishTypo, OswaldTypo } from '../../styled';

const tempThumb =
  'https://measured.ca/wp-content/uploads/1508-CubeHouse-Web-Rear-Entry-Square-Photographer-Ema-Peter.jpg';
export const ProjectForm = () => {
  const navigate = useNavigate();

  const { control, setValue, getValues, handleSubmit, watch } = useForm<ProjectApiType>({
    defaultValues: {},
  });

  const [imageFile, setImageFile] = useState(null);
  const [sunContent, setSunContent] = useState<string | null>(null);

  const params = useParams();
  const isEdit = params?.id ? true : false;

  if (isEdit)
    useQuery(`/projects/${params.id}`, {
      onSuccess: (project: ProjectApiType) => {
        setValue('thumb', project.thumb);
        setValue('name', project.name);
        setValue('summary', project.summary);
        setValue('slug', project.slug);
        setValue('location', project.location);
        setValue('finish_in', project.finish_in);
        setValue('customer_name', project.customer_name);
        setValue('square', project.square);
        setValue('is_main', project.is_main);

        // if(project)
        setValue('content', project.content);
        setSunContent(project.content as string);
      },
    });

  const handleGoBack = () => {
    navigate('/dashboard/manage-project');
  };
  const handleChange = (content: any) => {
    setValue('content', content);
  };

  const onSubmit = async (value: ProjectApiType) => {
    console.log('value', value);

    const formData = new FormData();

    if (imageFile) {
      formData.append('thumb', imageFile);
    }

    Object.entries(value).forEach(([key, value]) => {
      if (typeof value === 'boolean') {
        formData.append(key, value ? '1' : '0');
      } else {
        formData.append(key, value);
      }
    });

    const res = await axios.post(`${API_PREFIX}/projects`, formData);

    if (res.status === 201 || res.status === 200) {
      toast.success('T???o m???i th??nh c??ng');
    }
  };

  const handleUpdate = async () => {
    const data = getValues();

    if (imageFile) {
      data.thumb = imageFile;
    }

    console.log('data', data);
    const res = await axios.patch(`${API_PREFIX}/projects/${params.id}`, data);

    if (res.status === 201 || res.status === 200) {
      toast.success('C???p nh???t th??nh c??ng');
    }
  };

  return (
    <Container sx={{ paddingY: 4 }}>
      <MontserratDashboardTitle>
        {' '}
        {isEdit ? 'Chi ti???t d??? ??n' : 'Th??m m???i d??? ??n'}
      </MontserratDashboardTitle>
      <Button variant="outlined" onClick={handleGoBack}>
        &lt; Tr??? l???i
      </Button>
      <Grid container spacing={2} sx={{ my: 4, mb: 6 }}>
        <Grid item xs={12} sm={6} sx={{ position: 'relative' }}>
          <FormLabel>Thumb</FormLabel>
          <ImageUpload
            image={
              isEdit
                ? imageFile
                  ? URL.createObjectURL(imageFile)
                  : convertRelatePathImage(watch('thumb'))
                : imageFile
                ? URL.createObjectURL(imageFile)
                : tempThumb
            }
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
            label="M?? t??? ng???n"
            multiline
            rows={10}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input control={control} name="name" fullWidth label="T??n" />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Input control={control} name="slug" fullWidth label="URL" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input control={control} name="location" fullWidth label="?????a ??i???m" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input control={control} name="finish_in" fullWidth label="Ho??n th??nh l??c" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input control={control} name="customer_name" fullWidth label="Kh??ch h??ng" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input control={control} name="square" fullWidth label="Di???n t??ch" />
        </Grid>
      </Grid>

      <Box>
        <OswaldTypo mb={2}>Vi???t b??i m?? t??? chi ti???t d??? ??n</OswaldTypo>
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
          setContents={watch('content')}
        />
      </Box>
      <Box my={2}>
        <OswaldTypo mb={2}>????nh d???u d??? ??n n???i b???t</OswaldTypo>
        <Box sx={{ display: 'flex' }}>
          <FormGroup>
            <FormControlLabel control={<Switch />} label="D??? ??n n???i b???t" />
          </FormGroup>
        </Box>
      </Box>

      <Box my={4}>
        <Button
          onClick={isEdit ? handleUpdate : handleSubmit(onSubmit)}
          variant="contained"
        >
          L??u
        </Button>
      </Box>
    </Container>
  );
};
