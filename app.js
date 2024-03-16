const express = require('express');

const app = express();

// Import routers
const authRouter = require('./routes/auth.router');
const { connect } = require('mongoose');

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

app.listen(PORT, async () => {
  try {
    await connect(URI);
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error(error);
  }
});
