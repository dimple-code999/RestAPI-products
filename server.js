const express = require('express');
const app = express();
const cors = require('cors');

const port = 4000;

app.use(express.json({ limit: process.env.PAYLOAD_SIZE_LIMIT }));
app.use(express.urlencoded({
  extended: true,
  limit: process.env.PAYLOAD_SIZE_LIMIT,
}));
app.use(cors())


app.use('/', (req, res, next) => {
    res.status(201).json({ 
        Products: [
           {
            name: "Three mistakes of my life",
            price: "52$",
            category: "Books"
           }
        ]
    })
})



app.listen(port, () => {
    console.log(`Server started at port ${port}`);
  });