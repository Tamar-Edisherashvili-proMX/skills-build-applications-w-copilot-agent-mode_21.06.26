import express from 'express'

import { connectDatabase } from './config/database.js'
import {
  Activity,
  LeaderboardEntry,
  Team,
  User,
  Workout,
} from './models/index.js'
import {
  sampleActivities,
  sampleLeaderboard,
  sampleTeams,
  sampleUsers,
  sampleWorkouts,
} from './data/sampleData.js'

const app = express()
const port = Number(process.env.PORT ?? 8000)
const codespaceName = process.env.CODESPACE_NAME
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

type CollectionModel = {
  find: () => {
    lean: () => Promise<unknown[]>
  }
}

app.use(express.json())

function sendCollection(routeName: string, model: CollectionModel, fallbackData: unknown[]) {
  app.get(routeName, async (_request, response) => {
    try {
      const records = await model.find().lean()
      response.json(records.length > 0 ? records : fallbackData)
    } catch {
      response.json(fallbackData)
    }
  })
}

app.get('/api/health', (_request, response) => {
  response.json({
    status: 'ok',
    service: 'octofit-tracker-api',
    baseUrl,
  })
})

sendCollection('/api/users/', User, sampleUsers)
sendCollection('/api/teams/', Team, sampleTeams)
sendCollection('/api/activities/', Activity, sampleActivities)
sendCollection('/api/leaderboard/', LeaderboardEntry, sampleLeaderboard)
sendCollection('/api/workouts/', Workout, sampleWorkouts)

connectDatabase().catch(() => {
  console.warn('MongoDB unavailable, serving fallback sample data.')
})

app.listen(port, () => {
  console.log(`Octofit Tracker API listening on ${baseUrl}`)
})
