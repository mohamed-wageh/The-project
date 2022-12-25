import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import * as ROUTES from '../Constants/Route';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';


const theme = createTheme();

export default function ForgetPassword() {
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
    };
    return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              
              }}
            >
                <Typography component="h1" align="center" variant="h4" marginBottom="1rem">
                 Lost Password 
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.
            </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email "
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Email
            </Button>
            </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        <Grid container>
              <Grid item xs>
                <Link href={ROUTES.SIGN_IN}  variant="body2">
                  Remembered Password?  Sign In
                  </Link>
              </Grid>
              <Grid item>
                <Link href={ROUTES.SIGN_UP} variant="body2">
                  {"Create a new account? Sign Up"}
                  </Link>
              </Grid>
            </Grid>
          
    
              
      </Container>
    </ThemeProvider>
  );
}
