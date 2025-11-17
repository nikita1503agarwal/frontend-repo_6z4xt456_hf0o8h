import { getIndexName } from '../utils/format'

export async function fetchMarketData(signal) {
  const symbols = ['^GSPC', '^DJI', '^IXIC', '^RUT', '^VIX']
  const url = `https://query1.finance.yahoo.com/v8/finance/quote?symbols=${symbols.join(',')}`

  const res = await fetch(url, { signal })
  if (!res.ok) throw new Error('Failed to fetch market data')
  const json = await res.json()
  const result = json?.quoteResponse?.result || []

  return result.map(q => ({
    symbol: q.symbol,
    name: getIndexName(q.symbol),
    price: q.regularMarketPrice,
    change: q.regularMarketChange,
    changePercent: q.regularMarketChangePercent,
    currency: q.currency || 'USD',
    timestamp: q.regularMarketTime ? new Date(q.regularMarketTime * 1000) : new Date(),
  }))
}
