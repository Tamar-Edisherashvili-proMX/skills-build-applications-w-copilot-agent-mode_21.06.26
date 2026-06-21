import { connectDatabase } from '../config/database.js'
import {
  Activity,
  LeaderboardEntry,
  Team,
  User,
  Workout,
} from '../models/index.js'
import {
  sampleActivities,
  sampleLeaderboard,
  sampleTeams,
  sampleUsers,
  sampleWorkouts,
} from '../data/sampleData.js'

const description = 'Seed the octofit_db database with test data'

async function seed() {
  console.log(description)
  await connectDatabase()

  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    LeaderboardEntry.deleteMany({}),
    Workout.deleteMany({}),
  ])

  await Promise.all([
    User.insertMany(sampleUsers),
    Team.insertMany(sampleTeams),
    Activity.insertMany(sampleActivities),
    LeaderboardEntry.insertMany(sampleLeaderboard),
    Workout.insertMany(sampleWorkouts),
  ])

  console.log('Database seed complete.')
}

seed().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
