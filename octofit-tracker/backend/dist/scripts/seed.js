"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const database_1 = require("../config/database");
const Activity_1 = require("../models/Activity");
const LeaderboardEntry_1 = require("../models/LeaderboardEntry");
const Team_1 = require("../models/Team");
const User_1 = require("../models/User");
const Workout_1 = require("../models/Workout");
const users = [
    {
        username: 'maya_runner',
        email: 'maya.rivera@example.com',
        firstName: 'Maya',
        lastName: 'Rivera',
        profile: {
            bio: 'Distance runner training for her first trail half marathon.',
            fitnessGoal: 'Improve endurance',
            weeklyTargetMinutes: 300,
        },
    },
    {
        username: 'liam_lifts',
        email: 'liam.chen@example.com',
        firstName: 'Liam',
        lastName: 'Chen',
        profile: {
            bio: 'Strength-focused athlete balancing lifting with mobility work.',
            fitnessGoal: 'Build strength',
            weeklyTargetMinutes: 240,
        },
    },
    {
        username: 'sofia_cycles',
        email: 'sofia.patel@example.com',
        firstName: 'Sofia',
        lastName: 'Patel',
        profile: {
            bio: 'Cyclist using OctoFit to stay consistent between group rides.',
            fitnessGoal: 'Increase cardio capacity',
            weeklyTargetMinutes: 360,
        },
    },
    {
        username: 'noah_yoga',
        email: 'noah.jackson@example.com',
        firstName: 'Noah',
        lastName: 'Jackson',
        profile: {
            bio: 'Desk worker focused on flexibility, posture, and daily movement.',
            fitnessGoal: 'Improve mobility',
            weeklyTargetMinutes: 180,
        },
    },
];
const teams = [
    {
        name: 'Trail Blazers',
        mascot: 'Comet',
        city: 'Portland',
        memberUsernames: ['maya_runner', 'sofia_cycles'],
        weeklyGoalMinutes: 650,
    },
    {
        name: 'Core Crew',
        mascot: 'Bolt',
        city: 'Austin',
        memberUsernames: ['liam_lifts', 'noah_yoga'],
        weeklyGoalMinutes: 450,
    },
];
const activities = [
    {
        username: 'maya_runner',
        activityType: 'Run',
        durationMinutes: 52,
        caloriesBurned: 510,
        activityDate: new Date('2026-06-17T07:30:00Z'),
        notes: 'Tempo run with steady pacing and hill finish.',
    },
    {
        username: 'liam_lifts',
        activityType: 'Strength Training',
        durationMinutes: 65,
        caloriesBurned: 420,
        activityDate: new Date('2026-06-18T18:00:00Z'),
        notes: 'Lower-body session with squats, deadlifts, and accessory work.',
    },
    {
        username: 'sofia_cycles',
        activityType: 'Cycling',
        durationMinutes: 88,
        caloriesBurned: 760,
        activityDate: new Date('2026-06-19T06:45:00Z'),
        notes: 'Interval ride along the river route.',
    },
    {
        username: 'noah_yoga',
        activityType: 'Yoga',
        durationMinutes: 40,
        caloriesBurned: 150,
        activityDate: new Date('2026-06-20T12:15:00Z'),
        notes: 'Mobility flow focused on hips, hamstrings, and shoulders.',
    },
];
const leaderboard = [
    {
        username: 'sofia_cycles',
        teamName: 'Trail Blazers',
        totalMinutes: 355,
        totalCalories: 2950,
        rank: 1,
    },
    {
        username: 'maya_runner',
        teamName: 'Trail Blazers',
        totalMinutes: 310,
        totalCalories: 2480,
        rank: 2,
    },
    {
        username: 'liam_lifts',
        teamName: 'Core Crew',
        totalMinutes: 245,
        totalCalories: 1620,
        rank: 3,
    },
    {
        username: 'noah_yoga',
        teamName: 'Core Crew',
        totalMinutes: 190,
        totalCalories: 840,
        rank: 4,
    },
];
const workouts = [
    {
        title: 'Endurance Builder Run',
        focusArea: 'Cardio',
        difficulty: 'intermediate',
        durationMinutes: 45,
        suggestedForGoal: 'Improve endurance',
        exercises: ['10-minute warmup jog', '25-minute steady run', '5 hill strides', 'Cooldown walk'],
    },
    {
        title: 'Foundational Strength Circuit',
        focusArea: 'Strength',
        difficulty: 'beginner',
        durationMinutes: 35,
        suggestedForGoal: 'Build strength',
        exercises: ['Goblet squats', 'Pushups', 'Dumbbell rows', 'Glute bridges', 'Plank holds'],
    },
    {
        title: 'Cycling Power Intervals',
        focusArea: 'Cardio',
        difficulty: 'advanced',
        durationMinutes: 60,
        suggestedForGoal: 'Increase cardio capacity',
        exercises: ['Easy spin warmup', '6 power intervals', 'Cadence drills', 'Recovery spin'],
    },
    {
        title: 'Desk Reset Mobility Flow',
        focusArea: 'Mobility',
        difficulty: 'beginner',
        durationMinutes: 25,
        suggestedForGoal: 'Improve mobility',
        exercises: ['Cat-cow', 'World greatest stretch', 'Thoracic rotations', 'Hip flexor stretch'],
    },
];
const seedDatabase = async () => {
    console.log('Seed the octofit_db database with test data');
    await mongoose_1.default.connect(database_1.MONGODB_URI);
    await Promise.all([
        User_1.User.deleteMany({}),
        Team_1.Team.deleteMany({}),
        Activity_1.Activity.deleteMany({}),
        LeaderboardEntry_1.LeaderboardEntry.deleteMany({}),
        Workout_1.Workout.deleteMany({}),
    ]);
    await User_1.User.insertMany(users);
    await Team_1.Team.insertMany(teams);
    await Activity_1.Activity.insertMany(activities);
    await LeaderboardEntry_1.LeaderboardEntry.insertMany(leaderboard);
    await Workout_1.Workout.insertMany(workouts);
    console.log(`Seeded ${users.length} users`);
    console.log(`Seeded ${teams.length} teams`);
    console.log(`Seeded ${activities.length} activities`);
    console.log(`Seeded ${leaderboard.length} leaderboard entries`);
    console.log(`Seeded ${workouts.length} workouts`);
};
seedDatabase()
    .then(async () => {
    await mongoose_1.default.disconnect();
    console.log('OctoFit seed data ready');
})
    .catch(async (error) => {
    console.error('Failed to seed octofit_db', error);
    await mongoose_1.default.disconnect();
    process.exit(1);
});
