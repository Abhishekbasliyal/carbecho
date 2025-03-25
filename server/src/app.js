const express = require('express');
const app = express();
const env= require('dotenv');
const PORT= 8081;
const connectDb= require('./db/connect');
const cars= require('./routes/carsrouter');


env.config();

app.use('/api/cars', cars);
// app.use('/api/users',users);
// app.use('/api/uploads',uploads);

const connect=async ()=>{
    try{
        await connectDb(process.env.MONGO_URI);
        app.listen(process.env.PORT,()=>{
            console.log(`Server running on port ${process.env.PORT}`);
        });
    }catch(err){
        console.log(err.message);

    
}
}

connect()