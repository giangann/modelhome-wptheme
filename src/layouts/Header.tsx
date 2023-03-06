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
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CustomDrawer, ItemType } from '../components';
import { grey, orange } from '../libs';
import { HeaderItemTypo } from '../styled';

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const pages: ItemType[] = [
    {
      name: 'TRANG CHỦ',
      link: '/',
    },
    {
      name: 'VỀ CHÚNG TÔI',
      link: '/about',
    },
    {
      name: 'DỰ ÁN',
      link: '/project',
      children: [
        {
          name: 'THIẾT KẾ',
          link: '/project/design',
        },
        {
          name: 'THI CÔNG',
          link: '/project/implement',
        },
      ],
    },
    {
      name: 'BLOG',
      link: '/blog',
    },
  ];

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };
  useEffect(() => {}, []);
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: grey['800'] }} elevation={0}>
        <Container maxWidth="lg">
          {/* For Desktop */}
          {!isMobile ? (
            <Toolbar sx={{ height: 90 }}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  flexGrow: 1,
                  mr: 2,
                  display: { xs: 'none', md: 'block' },
                  fontSize: 32,
                  fontFamily: 'monospace',
                  fontWeight: 600,
                  letterSpacing: '.2rem',
                  color: orange['400'],
                  textDecoration: 'none',
                }}
              >
                ModelHome
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                sx={{ display: { xs: 'none', sm: 'block' } }}
              >
                {pages.map((page: any) => (
                  <Button
                    key={page.name}
                    sx={{
                      color: location.pathname.includes(page.link)
                        ? orange['400']
                        : '#fff',
                    }}
                    component="a"
                    href={page.link}
                  >
                    <HeaderItemTypo>{page.name}</HeaderItemTypo>
                  </Button>
                ))}
              </Stack>
            </Toolbar>
          ) : (
            // For Mobile
            <Toolbar sx={{ height: 90 }}>
              <Box
                sx={{
                  position: 'fixed',
                  top: '24px',
                  left: '16px',
                  zIndex: 8,
                  backgroundColor: orange['400'],
                  display: 'block',
                  width: 'fit-content',
                }}
              >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  // edge="start"
                >
                  <MenuIcon onClick={() => setOpenDrawer(true)} />
                </IconButton>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  flexGrow: 1,
                  mr: 2,
                  fontSize: 24,
                  fontFamily: 'monospace',
                  fontWeight: 600,
                  letterSpacing: '.2rem',
                  color: orange['400'],
                  margin: 'auto',
                  width: 'fit-content !important',
                  textDecoration: 'none',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                MoHo
              </Typography>
              <CustomDrawer open={openDrawer} onClose={handleCloseDrawer} item={pages} />
            </Toolbar>
          )}
        </Container>
      </AppBar>
    </>
  );
};
