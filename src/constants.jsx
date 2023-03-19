
    export function getEmail(email) {
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
      console.log('uwu')
    // Remove the textarea element from the document
    document.body.removeChild(emailTextArea);

    }