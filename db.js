const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

console.log('Mongoose connected');
