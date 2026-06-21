import { Router } from 'express';

import { Workout } from '../models/Workout';

const workoutsRouter = Router();

workoutsRouter.get('/', async (_req, res, next) => {
  try {
    const workouts = await Workout.find().sort({ title: 1 });
    res.status(200).json({ workouts });
  } catch (error) {
    next(error);
  }
});

workoutsRouter.post('/', async (req, res, next) => {
  try {
    const workout = await Workout.create(req.body);
    res.status(201).json({ workout });
  } catch (error) {
    next(error);
  }
});

export default workoutsRouter;