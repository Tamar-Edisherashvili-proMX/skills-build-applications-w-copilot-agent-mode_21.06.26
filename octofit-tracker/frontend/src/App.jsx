import { NavLink, Route, Routes } from 'react-router-dom'
import logo from '../../../docs/octofitapp-small.png'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const navigationItems = [
  { path: '/', label: 'Users', element: <Users /> },
  { path: '/activities', label: 'Activities', element: <Activities /> },
  { path: '/teams', label: 'Teams', element: <Teams /> },
  { path: '/leaderboard', label: 'Leaderboard', element: <Leaderboard /> },
  { path: '/workouts', label: 'Workouts', element: <Workouts /> },
]

function App() {
  return (
    <div className="app-shell bg-body-tertiary min-vh-100">
      <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm">
        <div className="container py-2">
          <NavLink className="navbar-brand d-flex align-items-center gap-2 fw-semibold" to="/">
            <img src={logo} alt="Octofit Tracker logo" className="app-logo" />
            <span>Octofit Tracker</span>
          </NavLink>
          <div className="navbar-nav flex-row flex-wrap gap-2 small">
            {navigationItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `nav-link px-3 rounded-pill ${isActive ? 'active bg-success-subtle text-success-emphasis' : 'text-body-secondary'}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      <main className="container py-5">
        <section className="hero-card card border-0 shadow-sm mb-4">
          <div className="card-body p-4 p-md-5">
            <span className="badge rounded-pill text-bg-success mb-3">Prototype</span>
            <h1 className="display-6 fw-bold">Student fitness tracking across profiles, teams, and workouts</h1>
            <p className="lead text-body-secondary mb-0">
              This React 19 presentation tier reads from the Octofit Tracker API and stays
              Codespaces-aware through <code>VITE_CODESPACE_NAME</code>.
            </p>
          </div>
        </section>

        <Routes>
          {navigationItems.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </main>
    </div>
  )
}

export default App
