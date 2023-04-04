import { Box, Button, Typography } from '@mui/material';
import { grey, teal } from '@mui/material/colors';
import { Container } from '@mui/system';

import { history } from '../utilities/history';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <Box
      sx={{
        py: 2,
        width: '100%',
        background: '#212936',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ gap: 1, display: 'flex', alignItems: 'center' }}>
          <img
            src={logo}
            alt="CRUD Logo"
            style={{
              minHeight: '24px',
              maxHeight: '36px',
              height: '100%',
              width: 'auto',
            }}
          />
          <Typography variant="h5" sx={{ fontWeight: 500, color: teal[400] }}>
            CRUD
          </Typography>
        </Box>
        <Box
          sx={{
            gap: 2,
            display: 'flex',
            '&> .MuiButton-root': {
              color: grey[50],
              '&:hover': {
                background: grey[50],
                color: teal[400],
              },
            },
          }}
        >
          <Button
            onClick={() => {
              history.push('/quiz');
              history.go(0);
            }}
          >
            Take a Quiz!
          </Button>
          <Button
            onClick={() => {
              history.push('/register');
              history.go(0);
            }}
            sx={{
              textTransform: 'none',
            }}
          >
            Register
          </Button>
          <Button
            onClick={() => {
              history.push('/login');
              history.go(0);
            }}
            sx={{
              textTransform: 'none',
            }}
          >
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
