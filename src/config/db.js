import mongoose from "mongoose";


export const connectDb= async ()=>{
    await mongoose.connect('mongodb+srv://jayaprakash:jai123@mongodb@cluster0.2a4h7.mongodb.net/mern_frontend').then(()=>console.log("DB connected"));
}