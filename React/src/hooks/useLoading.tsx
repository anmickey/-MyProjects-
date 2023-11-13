import { useState } from 'react';

export default function useLoading(
  callback: (data: FetchingProps) => Promise<void>
) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetching = async (arg: FetchingProps) => {
    try {
      setIsLoading(true);
      await callback(arg);
    } catch (err: any | unknown) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return [isLoading, fetching, error] as const;
}

interface FetchingProps {
  [key: string]: any;
}
