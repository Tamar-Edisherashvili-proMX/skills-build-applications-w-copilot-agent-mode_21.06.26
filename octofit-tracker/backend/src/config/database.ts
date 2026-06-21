import mongoose from 'mongoose'

const databaseName = 'octofit_db'
const databaseUrl = process.env.MONGODB_URI ?? `mongodb://127.0.0.1:27017/${databaseName}`

export async function connectDatabase() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection
  }

  return mongoose.connect(databaseUrl, {
    dbName: databaseName,
  })
}

export { mongoose, databaseName, databaseUrl }
