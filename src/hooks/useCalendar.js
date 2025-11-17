import useSWR from 'swr'
import { fetchEconomicCalendar } from '../lib/api/finnhub'

const REFRESH_INTERVAL = 60 * 60_000 // 1 hour

const fetcher = async (_, { signal }) => fetchEconomicCalendar(signal)

export default function useCalendar() {
  const { data, error, isLoading, mutate } = useSWR(
    ['economicCalendar'],
    (key) => {
      const controller = new AbortController()
      const promise = fetcher(key, { signal: controller.signal })
      promise.cancel = () => controller.abort()
      return promise
    },
    {
      refreshInterval: REFRESH_INTERVAL,
      revalidateOnFocus: false,
      shouldRetryOnError: true,
      dedupingInterval: 60_000,
    }
  )

  return { data, error, isLoading, mutate }
}
