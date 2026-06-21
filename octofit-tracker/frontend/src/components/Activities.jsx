import ResourcePage from './ResourcePage.jsx'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

function Activities() {
  return (
    <ResourcePage
      title="Activities"
      description="Daily activity logs for running, walking, and strength workouts."
      endpoint={endpoint}
      columns={[
        { key: 'user', label: 'Student' },
        { key: 'activity', label: 'Activity' },
        { key: 'minutes', label: 'Minutes' },
      ]}
    />
  )
}

export default Activities
