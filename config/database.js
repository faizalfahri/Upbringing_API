// import { Sequelize } from "sequelize";

// const db = new Sequelize('upbringing_api','ziaq','nolepngoding',{
//     host: "localhost",
//     dialect: "mysql"
// });

// export default db;

const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost:27017/upbringing_api';

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = {
  connectDB,
  mongoose, // Export Mongoose to use in other files if needed
};
