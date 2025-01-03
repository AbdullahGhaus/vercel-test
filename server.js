// const mongoose = require("mongoose")
// const app = require("./app")
// const cors = require("cors")

// app.use(cors())

// try {
//     mongoose
//         .connect('mongodb+srv://abdullahghaus:Power2Abdullah@ecommercelearning.3l0e6hu.mongodb.net/?retryWrites=true&w=majority&appName=EcommerceLearning')
//         .then(inst => console.log("Mongoose Connected"))
// } catch (err) {
//     console.log(err)
// }

// app.use("/api/v1/isWorking", (req, res) => {
//     res.send("Server is working fine")
// })

// app.listen(6000, () => {
//     console.log("Server Connected")
// })


const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
