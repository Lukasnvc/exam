import { useEffect, useState } from 'react';

type StorageKey = 'userToken';

export const useLocalStorage = <T extends unknown>(key: StorageKey, initialValue: T): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = window.localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  const setValue = (value: T) => {
    setStoredValue(value);
  };

  return [storedValue, setValue];
};
