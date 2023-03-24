import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const Wrapper = ({children}) => {
  return (
      <Container maxWidth="xl">
        {children}
      </Container>
  );
}
export default Wrapper;
