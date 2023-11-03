import './icon.css';

import { useMediaQuery, useTheme } from '@mui/material';

import { ZALO_LINK } from '../../constant';

export const ZaloFloatIcon = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className="zalo-fix">
      <div className="rotate"></div>
      <a
        className="zalo_btn"
        href={ZALO_LINK}
        target="_blank"
        title="Liên hệ qua Zalo"
        rel="noreferrer"
      >
        <img
          loading="lazy"
          src="//bizweb.dktcdn.net/100/468/541/themes/882827/assets/zalo_icon.png?1667840231206"
          alt="Liên hệ qua Zalo"
          width="50"
        />
      </a>
    </div>
  );
};
