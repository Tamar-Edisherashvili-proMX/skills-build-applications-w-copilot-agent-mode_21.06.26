import { useEffect, useState } from 'react'

function normalizeItems(payload) {
  if (Array.isArray(payload)) {
    return payload
  }

  if (Array.isArray(payload?.results)) {
    return payload.results
  }

  return []
}

function prettify(value) {
  if (value === null || value === undefined || value === '') {
    return '—'
  }

  if (Array.isArray(value)) {
    return value.join(', ')
  }

  if (typeof value === 'object') {
    return JSON.stringify(value)
  }

  return String(value)
}

function ResourcePage({ title, description, endpoint, columns }) {
  const [items, setItems] = useState([])
  const [status, setStatus] = useState('Loading…')

  useEffect(() => {
    let cancelled = false

    async function loadItems() {
      try {
        const response = await fetch(endpoint)

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        const payload = await response.json()

        if (!cancelled) {
          setItems(normalizeItems(payload))
          setStatus('Connected to API')
        }
      } catch (error) {
        if (!cancelled) {
          setItems([])
          setStatus(error instanceof Error ? error.message : 'Unable to load data')
        }
      }
    }

    loadItems()

    return () => {
      cancelled = true
    }
  }, [endpoint])

  return (
    <section className="card border-0 shadow-sm">
      <div className="card-body p-4">
        <div className="d-flex flex-column flex-md-row justify-content-between gap-3 mb-4">
          <div>
            <h2 className="h3 mb-2">{title}</h2>
            <p className="text-body-secondary mb-0">{description}</p>
          </div>
          <div className="text-md-end">
            <div className="small text-body-secondary">Endpoint</div>
            <code>{endpoint}</code>
            <div className="small mt-2">{status}</div>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.key} scope="col">
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.length > 0 ? (
                items.map((item, index) => (
                  <tr key={item.id ?? item._id ?? index}>
                    {columns.map((column) => (
                      <td key={column.key}>{prettify(item[column.key])}</td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length} className="text-body-secondary">
                    No records available yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default ResourcePage
