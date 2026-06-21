import { Schema, model } from 'mongoose';

export interface TeamDocument {
  name: string;
  mascot: string;
  city: string;
  memberUsernames: string[];
  weeklyGoalMinutes: number;
}

const teamSchema = new Schema<TeamDocument>(
  {
    name: { type: String, required: true, unique: true, trim: true },
    mascot: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    memberUsernames: [{ type: String, required: true, trim: true }],
    weeklyGoalMinutes: { type: Number, required: true, min: 0 },
  },
  { timestamps: true, collection: 'teams' },
);

export const Team = model<TeamDocument>('Team', teamSchema);