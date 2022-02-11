const express = require ('express');
const cors = require ('cors');

const app = express();

var corOptions = {
  origin: 'http://localhost:3306'
}


//MIDDLEWARES
app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));


//ROUTERS

const router = require('./routes/productRoutes');
app.use('/api/products', router);


//TESTING API

app.get('/',(req, res) => {
  res.json({message: 'hello from api'})
})

//PORT 

const PORT = process.env.PORT || 3306

//SERVER

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
});
