import { useEffect, useState } from "react";


export default function useDebounce<T>(value: T, delay?: number) : T  {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timerHandler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 500 );

    return () => {
      clearTimeout(timerHandler);
    };
  }, [value, delay]);

  return debouncedValue;
}