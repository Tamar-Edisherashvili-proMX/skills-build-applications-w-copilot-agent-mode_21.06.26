import { Router } from 'express';

import { Team } from '../models/Team';

const teamsRouter = Router();

teamsRouter.get('/', async (_req, res, next) => {
  try {
    const teams = await Team.find().sort({ name: 1 });
    res.status(200).json({ teams });
  } catch (error) {
    next(error);
  }
});

teamsRouter.post('/', async (req, res, next) => {
  try {
    const team = await Team.create(req.body);
    res.status(201).json({ team });
  } catch (error) {
    next(error);
  }
});

export default teamsRouter;