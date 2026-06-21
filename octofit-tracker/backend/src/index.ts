import express from 'express';
import mongoose from 'mongoose';

import { MONGODB_URI } from './config/database';
import activitiesRouter from './routes/activities';
import leaderboardRouter from './routes/leaderboard';
import teamsRouter from './routes/teams';
import usersRouter from './routes/users';
import workoutsRouter from './routes/workouts';

const app = express();
app.use(express.json());

const PORT = Number(process.env.PORT) || 8000;

app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

const startServer = async () => {
  await mongoose.connect(MONGODB_URI);

  const codespaceName = process.env.CODESPACE_NAME;
  const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : `http://localhost:${PORT}`;

  app.listen(PORT, () => {
    console.log(`OctoFit backend running on ${baseUrl}`);
  });
};

startServer().catch((error: unknown) => {
  console.error('Failed to start backend service', error);
  process.exit(1);
});
