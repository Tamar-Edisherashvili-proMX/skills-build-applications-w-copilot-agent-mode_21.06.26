import ResourcePage from './ResourcePage.jsx'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

function Workouts() {
  return (
    <ResourcePage
      title="Workouts"
      description="Suggested workouts personalized to each student's fitness goals."
      endpoint={endpoint}
      columns={[
        { key: 'name', label: 'Workout' },
        { key: 'level', label: 'Level' },
        { key: 'focus', label: 'Focus' },
      ]}
    />
  )
}

export default Workouts
