const FINNHUB_KEY = import.meta.env.VITE_FINNHUB_API_KEY

export async function fetchNews(signal) {
  const url = `https://finnhub.io/api/v1/news?category=general&token=${FINNHUB_KEY}`
  const res = await fetch(url, { signal })
  if (!res.ok) throw new Error('Failed to fetch news')
  const data = await res.json()
  return Array.isArray(data) ? data.slice(0, 10) : []
}

export async function fetchEconomicCalendar(signal) {
  const url = `https://finnhub.io/api/v1/calendar/economic?token=${FINNHUB_KEY}`
  const res = await fetch(url, { signal })
  if (!res.ok) throw new Error('Failed to fetch calendar')
  const data = await res.json()

  const now = new Date()
  const weekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)

  const events = data?.economicCalendar || data?.economic_calendar || []

  return events
    .filter(ev => {
      const eventDate = new Date(ev.time || ev.date || ev.datetime)
      return (ev.impact || ev.importance || '').toString().toLowerCase() === 'high' && eventDate >= now && eventDate <= weekFromNow
    })
    .slice(0, 5)
}
