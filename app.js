const express = require('express');
require('dotenv').config();
const connectDB = require('./db/connect');

const app = express();

// Import middlewares
const authMiddleware = require('./middlewares/auth.middleware');
const errorHandler = require('./middlewares/error.middleware');

// Import routers
const authRouter = require('./routes/auth.router');
const accountRouter = require('./routes/account.router');
const studentsRouter = require('./routes/students.router');
const projectsRouter = require('./routes/projects.router');
const blogsRouter = require('./routes/blogs.router');
const fieldsRouter = require('./routes/fields.router');
const modulesRouter = require('./routes/modules.router');
const announcementRouter = require('./routes/announcements.router');
const { NotFoundError } = require('./utils/errors');
// const resourcesRouter = require('./routes/resources.router');
// const planningsRoute = require('./routes/plannings.router');

// Constants
const PORT = process.env.PORT || 8080;
const URI = process.env.MONGO_URI;

// Middlewares
app.use(express.json());

// Routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/account', authMiddleware, accountRouter);
app.use('/api/v1/students', studentsRouter);
app.use('/api/v1/projects', authMiddleware, projectsRouter);
app.use('/api/v1/blogs', authMiddleware, blogsRouter);
app.use('/api/v1/fields', fieldsRouter);
app.use('/api/v1/modules', modulesRouter);
// app.use('/api/v1/fields/:fieldId/modules', modulesRouter);
// app.use('/api/v1/fields/:fieldId/plannings', planningsRoute);
// app.use('/api/v1/modules/:moduleId/resources', resourcesRouter);
app.use('/api/v1/announcements', announcementRouter);

app.get('*', (req, res, next) => {
  const error = new NotFoundError('Route not found');
  next(error);
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
