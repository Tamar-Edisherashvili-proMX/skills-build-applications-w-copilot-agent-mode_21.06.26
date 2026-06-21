import { Schema, model } from 'mongoose';

export interface UserDocument {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  profile: {
    bio: string;
    fitnessGoal: string;
    weeklyTargetMinutes: number;
  };
}

const userSchema = new Schema<UserDocument>(
  {
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    profile: {
      bio: { type: String, required: true },
      fitnessGoal: { type: String, required: true },
      weeklyTargetMinutes: { type: Number, required: true, min: 0 },
    },
  },
  { timestamps: true, collection: 'users' },
);

export const User = model<UserDocument>('User', userSchema);