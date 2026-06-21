import { Router } from 'express';

import { Activity } from '../models/Activity';

const activitiesRouter = Router();

activitiesRouter.get('/', async (_req, res, next) => {
  try {
    const activities = await Activity.find().sort({ activityDate: -1 });
    res.status(200).json({ activities });
  } catch (error) {
    next(error);
  }
});

activitiesRouter.post('/', async (req, res, next) => {
  try {
    const activity = await Activity.create(req.body);
    res.status(201).json({ activity });
  } catch (error) {
    next(error);
  }
});

export default activitiesRouter;