import { useEffect, useState } from "react";

type Props<T> = {
  setAction: React.Dispatch<React.SetStateAction<T[]>>;
  url: string;
};

const useFetch = <T>({ setAction, url }: Props<T>) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | Error>(null);

  useEffect(() => {
    const abortController = new AbortController();

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url, { signal: abortController.signal });
        const data: T[] = await response.json();
        if (!abortController.signal.aborted) {
          setLoading(false);
          setAction(data);
        }
      } catch (error) {
        if (!abortController.signal.aborted) {
          setLoading(false);
          setError(error instanceof Error ? error : new Error(String(error)));
          console.error(error);
        }
      }
    })();

    return () => abortController.abort(); // 컴포넌트 언마운트 시 요청 취소
  }, [url]);

  return { loading, error };
};

export default useFetch;
