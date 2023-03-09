import 'suneditor/dist/css/suneditor.min.css';

import { Box, Button, Container } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SunEditor from 'suneditor-react';

import { API_PREFIX } from '../../constant';
import { MontserratDashboardTitle, OswaldTypo } from '../../styled';

export const ManageProject = () => {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate('/dashboard/new-project');
  };
  const handleChange = (content: any) => {
    console.log('content', content);
  };
  const handleSave = async (content: any) => {
    console.log('save content', content);
    const res = await axios.post(`${API_PREFIX}/posts/create`, {
      postable_type: 'Project',
      postable_id: 1,
      content: content,
    });

    console.log('res of save', res);
    // if (res.s)
  };
  return (
    <Container sx={{ paddingY: 4 }}>
      <MontserratDashboardTitle>Quản lý Dự án</MontserratDashboardTitle>
      <Button variant="outlined" onClick={handleCreate}>
        + Tạo mới
      </Button>
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
      />{' '}
    </Container>
  );
};
