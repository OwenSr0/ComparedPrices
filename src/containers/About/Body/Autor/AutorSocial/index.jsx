import React from "react";
import { Box, Button } from '@mui/material';

const AutorSocial = () => {
    const email = 'owen_sanchez@comparo.land';

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
                <Button sx={stackButton} onClick={() => window.open('https://github.com/OwenSr0')}><img src="./img/github.png" alt="github" style={stackSize} /></Button>
                <Button sx={stackButton} onClick={() => window.open('https://www.linkedin.com/in/owen-sanchez-7bb1991a9/')}><img src="./img/linkedin.png" alt="linkedin" style={stackSize} /></Button>
            </Box>
            <Box>
                <Button sx={stackButton} onClick={handleClick}><img src="./img/email-icon.png" alt="email" style={stackSize} /></Button>
                <Button sx={stackButton} onClick={() => window.open('https://twitter.com/ComparoLand')}><img src="./img/twitter-icon.png" alt="twitter" style={stackSize} /></Button>
            </Box>
        </Box>
    )
}

export default AutorSocial;

const stackStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '12em',
    margin: '1em'
}


const stackBox = {
    display: 'flex'
}

const stackButton = {
    margin: '0.5em'
}

const stackSize = {
    widht: '100px',
    height: '100px'
}