import Container from '@mui/material/Container';

const Wrapper = ({children, sx}) => {
  return (
      <Container sx={{...sx ,overflow: 'auto'}} maxWidth="xl">
        {children}
      </Container>
  );
}
export default Wrapper;
