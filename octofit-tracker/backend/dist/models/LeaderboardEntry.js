"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaderboardEntry = void 0;
const mongoose_1 = require("mongoose");
const leaderboardEntrySchema = new mongoose_1.Schema({
    username: { type: String, required: true, trim: true },
    teamName: { type: String, required: true, trim: true },
    totalMinutes: { type: Number, required: true, min: 0 },
    totalCalories: { type: Number, required: true, min: 0 },
    rank: { type: Number, required: true, min: 1 },
}, { timestamps: true, collection: 'leaderboard' });
exports.LeaderboardEntry = (0, mongoose_1.model)('LeaderboardEntry', leaderboardEntrySchema);
