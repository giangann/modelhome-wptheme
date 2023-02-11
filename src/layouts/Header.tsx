import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { grey, orange } from '../libs';
import { HeaderItemTypo } from '../styled';

export const Header = () => {
  const location = useLocation();

  const pages = [
    {
      name: 'TRANG CHỦ',
      link: '/home',
    },
    {
      name: 'VỀ CHÚNG TÔI',
      link: '/about',
    },
    {
      name: 'DỰ ÁN',
      link: '/project',
    },
    {
      name: 'BLOG',
      link: '/blog',
    },
  ];

  useEffect(() => {}, []);
  return (
    // <AppBar sx={{ backgroundColor: grey['800'] }} elevation={0}>
    //   {/* Desktop */}
    //   <Container maxWidth={'xl'}>
    //     <Toolbar disableGutters>
    //       {/* logo */}
    //       <Typography
    //         variant="h6"
    //         noWrap
    //         component="a"
    //         href="/"
    //         sx={{
    //           mr: 2,
    //           display: { xs: 'none', md: 'flex' },
    //           fontSize: 32,
    //           fontFamily: 'monospace',
    //           fontWeight: 600,
    //           letterSpacing: '.3rem',
    //           color: orange['400'],
    //           textDecoration: 'none',
    //         }}
    //       >
    //         LOGO
    //       </Typography>
    //       {/* tabs */}
    //       <Box sx={{ flexGrow: 0, display:'flex' }}>
    //         {pages.map((page, index) => (
    //           <Button
    //             key={index}
    //             // onClick={handleCloseNavMenu}
    //             sx={{ my: 2, color: 'white', display: 'block' }}
    //           >
    //             {page.name}
    //           </Button>
    //         ))}
    //       </Box>
    //     </Toolbar>
    //   </Container>
    // </AppBar>
    <AppBar position="static" sx={{ backgroundColor: grey['800'] }} elevation={0}>
      <Container maxWidth="lg">
        <Toolbar sx={{ height: 90 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            //   onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              flexGrow: 1,
              mr: 2,
              display: { xs: 'none', md: 'block' },
              fontSize: 32,
              fontFamily: 'monospace',
              fontWeight: 600,
              letterSpacing: '.3rem',
              color: orange['400'],
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            {pages.map((page) => (
              // {location.path}
              <Button
                key={page.name}
                sx={{
                  color: location.pathname.includes(page.link) ? orange['400'] : '#fff',
                }}
                component="a"
                href={page.link}
              >
                <HeaderItemTypo>{page.name}</HeaderItemTypo>
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
