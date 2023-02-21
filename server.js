const express = require('express')
const app = express()
const filebd = require('./connect')
const router = express.Router()
const routerS = express.Router()
const bodyParser = require('body-parser')
const User = require('./routes/user')
const axios = require('axios')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))


app.use('/api/user', router)

app.use('/api/searches', routerS)

app.get('/', (req,res) => {
    res.end('hola')
})

app.listen(5000, function(){
    console.log('El servidor Aa')
});

router.post('/register', async (req, res) => {
    try {
        
      const { name, email, password, number, userId, token } = req.body;
      
      const user = new User({ name, email, password, number, userId, token });
      console.log(user)
      await user.save();
      res.json(token)
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
      const token = await User.findOne({email}, "token")
      res.json(token)
    } catch (err) {
      res.status(400).send(err);
    }
  });

  routerS.post('/search', async (req, res) => {
    
    try {
      const search = req.body.search
      await axios.get(`https://jsonplaceholder.typicode.com/${search}`)
        .then(response=>{
          res.json(response.data)
      }).catch(err=>{
          console.log(err);
      })
    } catch (err) {
      console.log(err)
    }
      
  })  

router.post('/test', async (req, res) => {

  try {
    const { email } = req.body
    const Rawr = await User.findOne({email}, "token")
    console.log(Rawr)
    res.json(Rawr)
  } catch (err) {
    console.log(err)
    console.log('polizia')
  }
    
})

router.post('/tests', (req, res) => {
  

  res.end('Hey Tests')
})