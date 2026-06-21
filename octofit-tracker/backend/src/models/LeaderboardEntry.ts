import { Schema, model } from 'mongoose';

export interface LeaderboardEntryDocument {
  username: string;
  teamName: string;
  totalMinutes: number;
  totalCalories: number;
  rank: number;
}

const leaderboardEntrySchema = new Schema<LeaderboardEntryDocument>(
  {
    username: { type: String, required: true, trim: true },
    teamName: { type: String, required: true, trim: true },
    totalMinutes: { type: Number, required: true, min: 0 },
    totalCalories: { type: Number, required: true, min: 0 },
    rank: { type: Number, required: true, min: 1 },
  },
  { timestamps: true, collection: 'leaderboard' },
);

export const LeaderboardEntry = model<LeaderboardEntryDocument>('LeaderboardEntry', leaderboardEntrySchema);