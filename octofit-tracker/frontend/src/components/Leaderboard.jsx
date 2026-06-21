import ResourcePage from './ResourcePage.jsx'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/'

function Leaderboard() {
  return (
    <ResourcePage
      title="Leaderboard"
      description="Top students and teams ranked by recent Octofit activity points."
      endpoint={endpoint}
      columns={[
        { key: 'rank', label: 'Rank' },
        { key: 'name', label: 'Name' },
        { key: 'points', label: 'Points' },
      ]}
    />
  )
}

export default Leaderboard
