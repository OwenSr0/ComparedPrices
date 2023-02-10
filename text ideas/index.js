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