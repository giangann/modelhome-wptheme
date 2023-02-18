import { Box, Drawer, DrawerProps, MenuItem, Stack } from '@mui/material';
import { grey } from '../libs';
import { LinkCustom, MontserratTypo, OswaldTypo } from '../styled';

type BaseItemType = {
  name: string;
  link: string;
};

export type ItemType = {
  children?: BaseItemType;
} & BaseItemType[];

type CustomDrawerProps = DrawerProps & {
  item: ItemType;
};

// Highlight when an item choossed
export const CustomDrawer = (props: CustomDrawerProps) => {
  const { item, open, onClose } = props;
  return (
    <Drawer
      PaperProps={{ sx: { backgroundColor: grey['800'], width: '50vw' } }}
      anchor="left"
      open={open}
      transitionDuration={800}
      onClose={onClose}
    >
      <Stack sx={{ px: 2, py: 4 }} spacing={2}>
        {item.map((item, index) => (
          <LinkCustom href={item.link}>
            <MontserratTypo color="white" fontSize={16} fontWeight={500}>
              {item.name}
            </MontserratTypo>
          </LinkCustom>
        ))}
      </Stack>
    </Drawer>
  );
};
