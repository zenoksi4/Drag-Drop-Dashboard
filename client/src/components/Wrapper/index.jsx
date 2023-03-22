
import CssBaseline from '@mui/material/CssBaseline';

import Container from '@mui/material/Container';

export default function Wrapper({children}) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        {children}
      </Container>
    </>
  );
}

