import React from "react";
import { Box, Typography, Button } from '@mui/material';

const SupportContact = () => {
    const email = 'soporte@comparo.land';

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
                <Typography sx={stackTy1}> Necesitas ayuda? </Typography>
                <Box sx={stackBox}>
                    <Box>
                        <Typography sx={stackTy2}>
                        ¿Necesitas ayuda con tu compra o con alguna de las funciones de nuestra página web? ¡No te preocupes,
                        estamos aquí para ayudarte! En Comparo Land, nos enorgullece ofrecer un servicio excepcional a nuestros usuarios.
                        Si tienes alguna pregunta o problema, no dudes en ponerte en contacto con nuestro equipo de soporte técnico.
                            <br/>
                            Correo: soporte@comparo.land
                        </Typography>
                    </Box>
                    <Box sx={stackBox2}>
                        <Button onClick={handleClick}><img src="/img/email-icon.png" alt="email" style={stackImg}/></Button>
                        <Button onClick={() => window.open('https://twitter.com/ComparoLand')}><img src="/img/twitter-icon.png" alt="twitter" style={stackImg}/></Button>
                    </Box>
                </Box>  
            </Box>
            
        )
    }
    
    export default SupportContact;
    
    const stackStyle = {
        display: 'flex',
        flexDirection: 'column'
    }
    
    const stackBox = {
        background: '#242526',
        width: 'auto',
        padding: '1em',
        borderRadius: '16px'
    }
    
    const stackBox2 = {
        display: 'flex',
        justifyContent: 'space-around',
        marginTop: '1em'
    }
    
    const stackTy1 = {
        fontSize: '1.2em',
        textAlign: 'center'
    }
    
    const stackTy2 = {
        width: '20em',
        textAlign: 'justify'
    }
    
    const stackImg = {
        width: '5em',
        height: '5em',
    }