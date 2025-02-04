const {connect}=require('mongoose');

const connectDB=async(mongo)=>{
    try{
        await connect(mongo);
        console.log('Database connected successfully');
    }catch(err){
        console.log(err);
    }   
}

module.exports=connectDB;