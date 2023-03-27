import { IconButton, MenuItem, MenuList, Popover } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ToogleLanguageText } from '../styled';

export const LanguageHeader = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [language, setLanguages] = useState();
  const { i18n } = useTranslation();
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const LANGUAGES = [
    {
      name: 'Tiếng Việt',
      symbol: 'vi',
    },
    {
      name: 'English',
      symbol: 'en',
    },
  ];
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToogleLanguage = (index: number) => {
    const chosenLanguage = LANGUAGES[index];

    localStorage.setItem('language', chosenLanguage.symbol);
    i18n.changeLanguage(chosenLanguage.symbol);
    setLang();

    handleClose();
  };

  const setLang = async () => {
    const symbol = await localStorage.getItem('language');
    if (symbol) {
      const l = LANGUAGES.find((i) => i.symbol === symbol);
      //@ts-ignore
      setLanguages(l?.symbol);
    } else {
      //@ts-ignore
      setLanguages('English');
    }
  };
  useEffect(() => {
    setLang();
  }, []);

  return (
    <>
      <IconButton onClick={handleClick} sx={{ color: 'white', p: 2 }}>
        {/* @ts-ignore */}
        <ToogleLanguageText>{language?.toUpperCase()}</ToogleLanguageText>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <MenuList>
          {LANGUAGES.map((item, index) => (
            <MenuItem key={index} onClick={() => handleToogleLanguage(index)}>
              {item.symbol.toUpperCase()}
            </MenuItem>
          ))}
        </MenuList>
      </Popover>
    </>
  );
};
