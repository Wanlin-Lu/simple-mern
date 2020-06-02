const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

const productsRouter = require('./routers/products-router')
const productsDAO = require('./dao/productsDAO')

const DB_URL = `mongodb+srv://luwanlin:R37T9XXsQivoY4pq@shareplaces-u7evs.gcp.mongodb.net/products_test?retryWrites=true&w=majority`;

const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS')
  next()
})

app.use('/products', productsRouter)

app.use((req, res, next) => {
  throw new Error('Could not find this route.')
})

MongoClient.connect(
  DB_URL,
  {
    useNewUrlParser: true,
    poolSize: 50,
    wtimeout: 2500,
  }
).catch(err => {
  console.log(err.stack)
  process.exit(1)
}).then(async client => {
  await productsDAO.injectDB(client)
  app.listen(5000, () => {
    console.log(`listening on port 5000`);
  });
})