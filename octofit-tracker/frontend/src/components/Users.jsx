import ResourcePage from './ResourcePage.jsx'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users/`
  : 'http://localhost:8000/api/users/'

function Users() {
  return (
    <ResourcePage
      title="Users"
      description="Student profiles and account details for the Octofit Tracker app."
      endpoint={endpoint}
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'grade', label: 'Grade' },
        { key: 'team', label: 'Team' },
      ]}
    />
  )
}

export default Users
