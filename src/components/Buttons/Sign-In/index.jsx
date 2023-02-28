import React from "react";
import { Box, Button} from '@mui/material';

  const SignIn = () => {
    return(
        <Box sx={stactBox}>
            <Button href="login" variant="contained">Sign in</Button>
        </Box>
    )
  }

export default SignIn;

const stactBox = {
  display: 'flex',
  justifyContent: 'center',
  gridColumnStart: '7',
  margin: 'auto 0 auto 0'
}