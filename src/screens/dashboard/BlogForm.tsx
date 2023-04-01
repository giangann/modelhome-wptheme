import 'suneditor/dist/css/suneditor.min.css';

import { Box, Button, Container, FormLabel, Grid } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import SunEditor from 'suneditor-react';

import { CustomAutoComplete, Input } from '@/components/Input';
import { API_PREFIX, convertRelatePathImage } from '@/constant';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ImageUpload } from '../../components';
import { BlogApiType, TagType } from '../../libs';
import { MontserratDashboardTitle, OswaldTypo } from '../../styled';

const tempThumb =
  'https://measured.ca/wp-content/uploads/1508-CubeHouse-Web-Rear-Entry-Square-Photographer-Ema-Peter.jpg';
export const BlogForm = () => {
  const navigate = useNavigate();

  const { control, setValue, getValues, handleSubmit, register, watch } =
    useForm<BlogApiType>({
      defaultValues: {},
    });

  const [imageFile, setImageFile] = useState(null);
  const [listTag, setListTag] = useState<TagType[]>([]);
  const [choosenTag, setChoosenTag] = useState<TagType[]>([]);

  const params = useParams();
  const isEdit = params?.id ? true : false;

  // get all tags
  useQuery<TagType[]>('tags', {
    onSuccess: (tag: TagType[]) => {
      setListTag(
        tag.map((tag: TagType, index: number) => {
          return {
            ...tag,
            label: tag.name,
            id: tag.id,
          };
        }),
      );
    },
  });

  // choose tags

  // handle on submit -> request data contain tag_id to table

  if (isEdit)
    useQuery(`/blogs/${params.id}`, {
      onSuccess: (blog: BlogApiType) => {
        setValue('thumb', blog.thumb);
        setValue('title', blog.title);
        setValue('author', blog.author);
        setValue('summary', blog.summary);

        // set current tags of project
        if (blog.tag_id) {
          setChoosenTag(listTag.filter((tag) => blog.tag_id?.includes(tag.id)));
        }

        // if(project)
        setValue('content', blog.content);
      },
    });

  const handleGoBack = () => {
    navigate('/dashboard/manage-blog');
  };
  const handleChange = (content: any) => {
    setValue('content', content);
  };

  const onSubmit = async (value: Omit<BlogApiType, 'post_id' | 'tags' | 'tag_id'>) => {
    const formData = new FormData();

    Object.entries(value).forEach(([key, value]) => {
      if (typeof value === 'boolean') {
        formData.append(key, value ? '1' : '0');
      } else {
        formData.append(key, value);
      }
    });

    if (imageFile && !isEdit) {
      formData.append('thumb', imageFile);
    }

    if (imageFile && isEdit) {
      formData.set('thumb', imageFile);
    }

    if (choosenTag.length) {
      formData.append('tag_id', JSON.stringify(choosenTag));
    }

    const contentFieldData = getValues('content');
    if (contentFieldData) {
      if (contentFieldData.length < 20) {
        formData.delete('content');
      }
    }
    if (isEdit) {
      const res = await axios.post(`${API_PREFIX}blogs/update/${params.id}`, formData);
      if (res.status === 201 || res.status === 200) {
        toast.success('Cập nhật thành công');
      }
    } else {
      const res = await axios.post(`${API_PREFIX}blogs`, formData);
      if (res.status === 201 || res.status === 200) {
        toast.success('Tạo mới thành công');
      }
    }
  };

  return (
    <Container sx={{ paddingY: 4 }}>
      <MontserratDashboardTitle>
        {' '}
        {isEdit ? 'Chi tiết bài blog' : 'Thêm mới blog'}
      </MontserratDashboardTitle>
      <Button variant="outlined" onClick={handleGoBack}>
        &lt; Trở lại
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
          <Input control={control} name="title" fullWidth label="Tiêu đề" />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Input control={control} name="author" fullWidth label="Tác giả" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormLabel>Thẻ</FormLabel>
          {/* <Input control={control} name="square" fullWidth label="Diện tích" /> */}
          <CustomAutoComplete
            // name="tag"
            onChange={(event, value) => {
              console.log('value', value);
              setChoosenTag(value);
            }}
            multiple
            getOptionLabel={(option) => option.name}
            id="combo-box-demo"
            defaultValue={choosenTag}
            value={choosenTag}
            options={listTag}
          />
        </Grid>
      </Grid>

      <Box>
        <OswaldTypo mb={2}>Viết bài blog</OswaldTypo>
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

      <Box my={4}>
        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          Lưu
        </Button>
      </Box>
    </Container>
  );
};
