"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LeaderboardEntry_1 = require("../models/LeaderboardEntry");
const leaderboardRouter = (0, express_1.Router)();
leaderboardRouter.get('/', async (_req, res, next) => {
    try {
        const leaderboard = await LeaderboardEntry_1.LeaderboardEntry.find().sort({ rank: 1 });
        res.status(200).json({ leaderboard });
    }
    catch (error) {
        next(error);
    }
});
exports.default = leaderboardRouter;
