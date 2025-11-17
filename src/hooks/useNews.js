import useSWR from 'swr'
import { fetchNews } from '../lib/api/finnhub'

const REFRESH_INTERVAL = 5 * 60_000 // 5 minutes

const fetcher = async (_, { signal }) => fetchNews(signal)

export default function useNews() {
  const { data, error, isLoading, mutate } = useSWR(
    ['news'],
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
      dedupingInterval: 30_000,
    }
  )

  return { data, error, isLoading, mutate }
}
