import { Typography, useTheme } from '@mui/material';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography fontWeight="700" fontSize="1.7rem">
      <a href='/' style={{"textDecoration": "none", "color": "rgb(0 201 208)"}}>
        Moon<span style={{ color: theme.palette.primary.main }}>Flix</span>
      </a>
    </Typography>
  );
};

export default Logo;