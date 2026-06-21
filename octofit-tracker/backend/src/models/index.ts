import mongoose from 'mongoose'

const { model, models, Schema } = mongoose

const userSchema = new Schema({
  name: String,
  grade: String,
  team: String,
})

const teamSchema = new Schema({
  name: String,
  members: Number,
  points: Number,
})

const activitySchema = new Schema({
  user: String,
  activity: String,
  minutes: Number,
})

const leaderboardSchema = new Schema({
  rank: Number,
  name: String,
  points: Number,
})

const workoutSchema = new Schema({
  name: String,
  level: String,
  focus: String,
})

export const User = models.User ?? model('User', userSchema)
export const Team = models.Team ?? model('Team', teamSchema)
export const Activity = models.Activity ?? model('Activity', activitySchema)
export const LeaderboardEntry = models.LeaderboardEntry ?? model('LeaderboardEntry', leaderboardSchema)
export const Workout = models.Workout ?? model('Workout', workoutSchema)
