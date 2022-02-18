console.log('App Super Héroes');
const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const { application } = require('express');

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'http://myapp.com.co'];
const options ={
  origin:(origin, callback)=>{
    if (whitelist.includes(origin)){
      callback(null, true);
    }
    else{
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors());

app.get('/', (req, res)=> {
 res.send('Hola este es mi server');
});

app.listen(port, () => {
  console.log('mi port'+ port);
});

routerApi(app);

