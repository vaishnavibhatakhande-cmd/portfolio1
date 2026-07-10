import { useEffect, useState } from 'react'

const GITHUB_USERNAME = 'vaishnavibhatakhande-cmd'

/**
 * Fetches public repositories for the configured GitHub user.
 * Fails silently (returns an empty array) if the API is unreachable
 * or rate-limited, so the UI never breaks without a network.
 */
export function useGithubRepos(limit = 6) {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${limit}`
        )
        if (!res.ok) throw new Error('GitHub API request failed')
        const data = await res.json()
        if (!cancelled) setRepos(data)
      } catch (err) {
        if (!cancelled) setError(err)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchRepos()
    return () => {
      cancelled = true
    }
  }, [limit])

  return { repos, loading, error }
}
