import { Menu, MenuItem, MenuProps } from '@mui/material';
import { LinkCustom, MontserratTypo } from '../styled';
import { ItemType } from './CustomDrawer';

export const CustomMenu = (props: MenuProps & { item: ItemType }) => {
  const { item, ...menuProps } = props;
  return (
    <Menu {...menuProps}>
      {item.map((item, index) => (
        <LinkCustom href={item.link} key={index}>
          <MenuItem>
            <MontserratTypo color="black" fontSize={16} fontWeight={500}>
              {item.name}
            </MontserratTypo>
          </MenuItem>
        </LinkCustom>
      ))}
    </Menu>
  );
};
