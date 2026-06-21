import { Router } from 'express';

import { User } from '../models/User';

const usersRouter = Router();

usersRouter.get('/', async (_req, res, next) => {
  try {
    const users = await User.find().sort({ username: 1 });
    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
});

usersRouter.post('/', async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
});

export default usersRouter;