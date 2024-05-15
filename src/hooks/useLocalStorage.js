import { useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  useEffect(() => {
    const storedData = localStorage.getItem(key);
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      initialValue(parsedData);
    }
  }, [key, initialValue]);
}