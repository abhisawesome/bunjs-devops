import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/user',(req,res)=>{
    res.status(200).json({
        user: 'John Doe',
        id: 1
    })
})
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});