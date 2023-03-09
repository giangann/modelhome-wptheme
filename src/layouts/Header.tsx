import { PagesRounded } from '@mui/icons-material';
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

import { CustomDrawer, CustomMenu, ItemType } from '../components';
import { CodiconTriangleDown } from '../components/icon';
import { grey, orange } from '../libs';
import { HeaderItemTypo } from '../styled';

export const Header = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

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
      name: 'DỊCH VỤ',
      link: '/service',
      children: [
        {
          name: 'Thiết kế kiến trúc',
          link: '/service/1',
        },
        {
          name: 'Xây dựng phần thô',
          link: '/service/1',
        },
        {
          name: 'Cải tạo, nâng cấp',
          link: '/service/1',
        },
      ],
    },
    {
      name: 'DỰ ÁN',
      link: '/project',
      // children: [
      //   {
      //     name: 'THIẾT KẾ',
      //     link: '/project/design',
      //   },
      //   {
      //     name: 'THI CÔNG',
      //     link: '/project/implement',
      //   },
      // ],
    },
    {
      name: 'BLOG',
      link: '/blog',
    },
  ];

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: grey['800'] }} elevation={0}>
        <Container maxWidth="lg">
          {/* For Desktop */}
          {!isMobile ? (
            <Stack
              direction="row"
              justifyContent="space-between"
              height={90}
              alignItems="center"
            >
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
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
              <Stack direction="row" spacing={2}>
                {pages.map((page: any) => (
                  <Stack direction="row" key={page.name}>
                    <Button
                      sx={{
                        color: location.pathname.includes(page.link)
                          ? orange['400']
                          : '#fff',
                      }}
                      component="a"
                      href={page.children ? '#' : page.link}
                      onClick={
                        page.children
                          ? (event: any) => handleClick(event)
                          : () => {
                              // do nothing
                            }
                      }
                    >
                      <HeaderItemTypo>{page.name}</HeaderItemTypo>
                    </Button>
                    {(page.children as any) && (
                      <>
                        <IconButton sx={{ p: 1 }} onClick={handleClick}>
                          <CodiconTriangleDown color="white" fontSize={14} />
                        </IconButton>
                        <CustomMenu
                          open={openMenu}
                          onClose={handleCloseMenu}
                          item={page?.children as any}
                          anchorEl={anchorEl}
                        />
                      </>
                    )}
                  </Stack>
                ))}
              </Stack>
            </Stack>
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
                <IconButton color="inherit" aria-label="open drawer">
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
                ModelHome
              </Typography>
              <CustomDrawer open={openDrawer} onClose={handleCloseDrawer} item={pages} />
            </Toolbar>
          )}
        </Container>
      </AppBar>
    </>
  );
};
