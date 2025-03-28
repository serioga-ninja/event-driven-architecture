import { useEffect, useState } from 'react';

type FetchFunction<T> = () => Promise<T>;

const useFetch = <T>(fetchFunction: FetchFunction<T>, autoFetch = true) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(autoFetch);
  const [error, setError] = useState<Error | null>(null);

  const fetch = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchFunction();

      setData(data);
    } catch (error) {
      setError(error instanceof Error ? error : new Error('An error occurred'));
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setData(null);
    setError(null);
    setLoading(false);
  };

  useEffect(() => {
    if (autoFetch) {
      fetch();
    }
  }, []);

  return { data, loading, error, refetch: fetch, reset };
};

export default useFetch;
