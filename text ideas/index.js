router.post("/register", (req, res) => {
    res.json({success: true})
     console.log(JSON.stringify(req.body));
      let { username, password } = req.body;
      let err = validate.username(username);
      if (err) throw err;
      err = validate.password(password);
      if (err) throw err;
      db.collection("users").find({ username: username }),
        function (err, username) {
          if (err) {
            throw err;
          }
          if (username) {
            console.log(username);
            console.log("Username in use!");
          } else {
            console.log("Not in use!");
            db.collection("users").insertOne({
              username: username.value,
              password: password.value,
            });
    
          }
        };
        
    });


    import React from "react";
import { Box, Button } from '@mui/material';

const UserIcon = () => {

    return(
        <Box sx={stactBox}>
            <Button sx={stackButton}>
                <img src="./img/profile-user.png" alt="user-profile" width="50" height="50" />
            </Button>
            <UserMenu />
        </Box>
    )
}

export default UserIcon;

const stactBox = {
    display: 'flex',
    justifyContent: 'center',
    gridColumnStart: '7',
    margin: 'auto 0 auto 0'
}

const stackButton = {

    margin: 'auto 0 auto 0',
    width: '2.5em',
    height: '2.5em',
}