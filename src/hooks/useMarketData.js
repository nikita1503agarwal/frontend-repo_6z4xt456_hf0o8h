import useSWR from 'swr'
import { fetchMarketData } from '../lib/api/yahooFinance'

const REFRESH_INTERVAL = 60_000 // 60s

const fetcher = async (_, { signal }) => fetchMarketData(signal)

export default function useMarketData() {
  const { data, error, isLoading, mutate } = useSWR(
    ['marketData'],
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
      dedupingInterval: 10_000,
    }
  )

  return { data, error, isLoading, mutate }
}
