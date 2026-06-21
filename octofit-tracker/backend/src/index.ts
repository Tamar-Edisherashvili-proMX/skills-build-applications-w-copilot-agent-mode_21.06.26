import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

const PORT = Number(process.env.PORT) || 8000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';

app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

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
