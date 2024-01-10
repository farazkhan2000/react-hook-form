import React from 'react';

// Material UI Imports
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Form = () => {


  return (
    <Container
      maxWidth="sm"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <form>
        <div
          style={{
            backgroundColor: '#f0f0f0',
            padding: '30px',
            borderRadius: '8px',
          }}
        >
          <Typography variant="h3" component="h1">
            Form 
          </Typography>
          <Typography variant="subtitle1" component="h2">
            React-Hook-Form and YUP 
          </Typography>
          <Box
            component="div"
            sx={{
              '& > :not(style)': { width: '100%' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField 
              type='input'
              id="outlined-basic" 
              label="Full Name" 
              variant="outlined" 
              fullWidth
              margin="normal"
            />
            <TextField 
              id="outlined-basic" 
              label="Email" 
              variant="outlined" 
              fullWidth
              margin="normal"
            />
            <TextField 
              id="outlined-basic" 
              label="Age" 
              variant="outlined" 
              fullWidth
              margin="normal"
            />
            <TextField 
              id="outlined-basic" 
              label="Password" 
              variant="outlined" 
              fullWidth
              margin="normal"
            />
            <TextField 
              id="outlined-basic" 
              label="Confirm Password" 
              variant="outlined" 
              fullWidth
              margin="normal"
            />
            <Button 
            type="submit"
            variant="contained"
            size="large"
            sx={{ marginTop: '20px' }}
            >
              Submit
            </Button>
          </Box>
        </div>
      </form>
    </Container>
  );
};

export default Form;
