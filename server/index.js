const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const userRoutes = require("./routes/authRoutes")
const productRoutes = require("./routes/productRoutes")
const cartRoutes = require('./routes/cartRoutes')
const orderRoutes = require('./routes/orderRoutes')
const path = require("path")

dotenv.config();

const app = express();

app.use(cors(
//     {
//     origin : process.env.ORIGIN
// }
))
app.use(express.json());

connectDB();


app.get('/',(req,res)=>{
    res.send("Hello Backend")
})

app.use("/api/auth",userRoutes);
app.use("/api/product",productRoutes)
app.use("/api/cart",cartRoutes)
app.use('/api/order',orderRoutes)

if(process.env.NODE_ENV=="prod"){
    app.use(express.static(path.join(__dirname,"../client/dist")));

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../client","dist","index.html"))
    })
}

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
    
})