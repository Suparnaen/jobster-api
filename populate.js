require('dotenv').config();

const mockData = require('./mock-data.json');
const Job = require('./models/Job');
//const Job = require('./models/Job');

const connectDB = require('./db/connect');

const start = async()=>{
try {
    await connectDB(process.env.MONGO_URI);
    //await Job.remove() --removes all jobs from collection but table remains
    await Job.create(mockData)
    console.log('Success!!')
     process.exit(0);
} catch (error) {
    console.log(error);
    process.exit(1);
    
}

}

start();

//to run this file `node populate.js`, then verify if all data added in DB
// return mongoose.connect(url,{ useNewUrlParser: true }) --add this line to connect.js else will throw parser error
