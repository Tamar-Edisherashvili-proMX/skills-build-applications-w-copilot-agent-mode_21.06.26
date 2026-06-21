"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Activity_1 = require("../models/Activity");
const activitiesRouter = (0, express_1.Router)();
activitiesRouter.get('/', async (_req, res, next) => {
    try {
        const activities = await Activity_1.Activity.find().sort({ activityDate: -1 });
        res.status(200).json({ activities });
    }
    catch (error) {
        next(error);
    }
});
activitiesRouter.post('/', async (req, res, next) => {
    try {
        const activity = await Activity_1.Activity.create(req.body);
        res.status(201).json({ activity });
    }
    catch (error) {
        next(error);
    }
});
exports.default = activitiesRouter;
