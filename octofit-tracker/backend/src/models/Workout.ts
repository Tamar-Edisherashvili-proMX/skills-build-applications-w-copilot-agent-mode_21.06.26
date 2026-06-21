import { Schema, model } from 'mongoose';

export interface WorkoutDocument {
  title: string;
  focusArea: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  durationMinutes: number;
  suggestedForGoal: string;
  exercises: string[];
}

const workoutSchema = new Schema<WorkoutDocument>(
  {
    title: { type: String, required: true, unique: true, trim: true },
    focusArea: { type: String, required: true, trim: true },
    difficulty: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      required: true,
    },
    durationMinutes: { type: Number, required: true, min: 0 },
    suggestedForGoal: { type: String, required: true, trim: true },
    exercises: [{ type: String, required: true, trim: true }],
  },
  { timestamps: true, collection: 'workouts' },
);

export const Workout = model<WorkoutDocument>('Workout', workoutSchema);