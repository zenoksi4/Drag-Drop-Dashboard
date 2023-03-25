import Container from '@mui/material/Container';

const Wrapper = ({children}) => {
  return (
      <Container sx={{overflow: 'auto'}} maxWidth="xl">
        {children}
      </Container>
  );
}
export default Wrapper;
