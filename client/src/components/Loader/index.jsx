import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box sx={{width: '100%', display: 'flex', justifyContent: 'center'}}>
        <CircularProgress />
    </Box>
  );
}
export default Loader;
