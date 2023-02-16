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


    const stackBox = {
      display: 'grid',
      width: '100%',
      height: '100%',
      gridTemplateColumns: ' repeat(4, 25%)',
      gridTemplateRows: ' repeat(6, auto)'
  }