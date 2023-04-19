import React from "react";
import { Box, Button } from '@mui/material';
import './index.css'

const ComparoSocial = () => {
    const email = 'contacto@comparo.land';

  function handleClick() {
    // Create a new textarea element to store the email
    const emailTextArea = document.createElement('textarea');
    emailTextArea.value = email;
    emailTextArea.setAttribute('readonly', '');
    emailTextArea.style.position = 'absolute';
    emailTextArea.style.left = '-9999px';

    // Append the textarea element to the document
    document.body.appendChild(emailTextArea);

    // Select the email text
    emailTextArea.select();
    emailTextArea.setSelectionRange(0, emailTextArea.value.length);

    // Copy the email text to the clipboard
    navigator.clipboard.writeText(email).then(() => {
        // Show a confirmation message
        alert(`Haz copiado el correo: ${email}`);
      }).catch((error) => {
        console.error('Failed to copy email to clipboard:', error);
      });

    // Remove the textarea element from the document
    document.body.removeChild(emailTextArea);

    }
    return(
        <Box sx={stackStyle}>
            <Box sx={stackBox}>
                <Button onClick={() => window.open('https://twitter.com/ComparoLand')}><img src="/img/twitter-icon.png" alt="twitter" width="100px" id="imgTwitter"/></Button>
                <Button onClick={handleClick}><img src="/img/email-icon.png" alt="email" width="100px" id="imgEmail"/></Button>
            </Box>
        </Box>
    )
}

export default ComparoSocial;

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: {
        xs: '13em',
        sm: 'auto'
    }
}

const stackBox = {
    display: 'flex',
    width: {
        xs: 'auto',
        sm: '15em',
        md: '18em',
        lg: '22em',
        xl: '20em',
    },
    justifyContent: 'space-between',
    marginTop: '1.5em'
}