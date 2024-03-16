const express = require('express');
require('dotenv').config();

const app = express();

// Import middlewares
const errorHandler = require('./middlewares/error.middleware');

// Import routers
const authRouter = require('./routes/auth.router');
const connectDB = require('./db/connect');

// Constants
const PORT = process.env.PORT || 8080;
const URI = process.env.MONGO_URI;

// Middlewares
app.use(express.json());

// Routes
app.use('api/v1/auth', authRouter);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(errorHandler);

app.listen(PORT, async () => {
  try {
    await connectDB(URI);
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error(error);
  }
});
