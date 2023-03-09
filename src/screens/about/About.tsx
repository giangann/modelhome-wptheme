import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';

import { ImportantMilestone } from './ImportantMilestone';
import { Introduce } from './Introduce';
import { Philosophy } from './Philosophy';
export const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('m'));
  return (
    <Box>
      <Introduce />

      {isMobile ? undefined : (
        <Box position="relative" height={{ xs: 800, sm: 1000 }} mt={8}>
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height={{ xs: 500, sm: 1000 }}
          >
            {isMobile ? undefined : (
              <>
                <Grid container sx={{ position: 'relative', top: '0', zIndex: 3 }}>
                  <Grid item xs={8.5}>
                    <Philosophy />
                  </Grid>
                </Grid>
                <Grid container sx={{ position: 'relative', top: '-500px' }}>
                  <Grid item xs={6} sx={{ zIndex: 0 }} />
                  <Grid item xs={6} sx={{ zIndex: 4 }}>
                    <ImportantMilestone />
                  </Grid>
                </Grid>
              </>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};
