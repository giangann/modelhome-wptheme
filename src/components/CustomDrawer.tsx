import { Box, Drawer, DrawerProps, IconButton, MenuItem, Stack } from '@mui/material';
import { useState } from 'react';
import { grey } from '../libs';
import { LinkCustom, MontserratTypo, OswaldTypo } from '../styled';
import { CustomMenu } from './CustomMenu';
import { CodiconTriangleDown } from './icon';

export type ItemType = {
  children?: ItemType[];
  name: string;
  link: string;
};

type CustomDrawerProps = DrawerProps & {
  item: ItemType[];
};

// Highlight when an item choossed
export const CustomDrawer = (props: CustomDrawerProps) => {
  const { item, open, onClose, ...drawerProps } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(true);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };
  return (
    <Drawer
      PaperProps={{ sx: { backgroundColor: grey['800'], width: '50vw' } }}
      anchor="left"
      open={open}
      transitionDuration={800}
      onClose={onClose}
      {...drawerProps}
    >
      <Stack sx={{ px: 2, py: 4 }} spacing={2}>
        {item.map((item, index) => (
          <Stack key={index} direction="row" spacing={1.5} alignItems="center">
            <LinkCustom href={item.link}>
              <MontserratTypo color="white" fontSize={16} fontWeight={500}>
                {item.name}
              </MontserratTypo>
            </LinkCustom>
            {(item.children as any) && (
              <>
                <IconButton sx={{ p: 1 }} onClick={handleClick}>
                  <CodiconTriangleDown color="white" fontSize={14} />
                </IconButton>
                <CustomMenu
                  open={openMenu}
                  onClose={handleCloseMenu}
                  item={item?.children as any}
                  anchorEl={anchorEl}
                />
              </>
            )}
          </Stack>
        ))}
      </Stack>
    </Drawer>
  );
};
