import express from 'express'

const app = express();
const PORT = process.env.PORT ?? 8080;

app.get('/', (req, res) => {
  return res.json({msg: "Welcome to the Billionare Club. You belongs to us."});
})

app.listen(PORT, () => {
  console.log('Server is running on the port: ', PORT);
})