"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Workout_1 = require("../models/Workout");
const workoutsRouter = (0, express_1.Router)();
workoutsRouter.get('/', async (_req, res, next) => {
    try {
        const workouts = await Workout_1.Workout.find().sort({ title: 1 });
        res.status(200).json({ workouts });
    }
    catch (error) {
        next(error);
    }
});
workoutsRouter.post('/', async (req, res, next) => {
    try {
        const workout = await Workout_1.Workout.create(req.body);
        res.status(201).json({ workout });
    }
    catch (error) {
        next(error);
    }
});
exports.default = workoutsRouter;
