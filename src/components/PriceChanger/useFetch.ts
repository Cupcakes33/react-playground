import { useEffect } from "react";

type Props<T> = {
  setAction: React.Dispatch<React.SetStateAction<T[]>>;
  url: string;
};

const useFetch = <T>({ setAction, url }: Props<T>) => {
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const data: T[] = await response.json();
        if (data) {
          setAction(data);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, [url, setAction]);
};
export default useFetch;
