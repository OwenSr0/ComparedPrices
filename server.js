const express = require('express')
const app = express()
const filebd = require('./connect')
const router = express.Router()
const bodyParser = require('body-parser')
const User = require('./routes/user')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/user', router)

app.get('/', (req,res) => {
    res.end('hola')
})

app.listen(5000, function(){
    console.log('El servidor Aa')
});

router.post('/register', async (req, res) => {
    try {
        
      const { name, email, password, number } = req.body;
      
      const user = new User({ name, email, password, number });
      console.log(user)
      await user.save();
      res.status(201).send('added');
    } catch (err) {
        console.log(err)
      res.status(400).send(err);
    }
  });

  router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
      const isValid = await user.isValidPassword(password);
      if (!isValid) {
        return res.status(401).send({ message: 'Invalid password' });
      }
      res.status(200).send('iniciado sesion' );
    } catch (err) {
      res.status(400).send(err);
    }
  });

router.get('/test', (req, res) => {
    res.end('Hey Test')
})