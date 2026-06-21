"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
const mongoose_1 = require("mongoose");
const teamSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true, trim: true },
    mascot: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    memberUsernames: [{ type: String, required: true, trim: true }],
    weeklyGoalMinutes: { type: Number, required: true, min: 0 },
}, { timestamps: true, collection: 'teams' });
exports.Team = (0, mongoose_1.model)('Team', teamSchema);
