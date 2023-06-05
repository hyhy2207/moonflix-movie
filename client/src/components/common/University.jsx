import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const University = () => {
  const theme = useTheme();
  const isLgScreen = useMediaQuery(theme.breakpoints.down('lg'));
  
  const content = (
    <span style={{ color: theme.palette.primary.light }}>
      HỌC VIỆN CÔNG NGHỆ BƯU CHÍNH VIỄN THÔNG 
      {isLgScreen ? <br /> : ' '}
      CƠ SỞ TẠI THÀNH PHỐ HỒ CHÍ MINH
    </span>
  );

  return (
    <Box>
      <Typography
        fontWeight="600"
        sx={{
          fontSize: {
            xs: '14px',
            sm: '1.1rem',
            md: '14px',
            lg: '14px',
            xl: '14px',
          },
          padding: '1rem',
          textAlign: 'center',
        }}
      >
        {content}
      </Typography>
    </Box>
  );
};

export default University;