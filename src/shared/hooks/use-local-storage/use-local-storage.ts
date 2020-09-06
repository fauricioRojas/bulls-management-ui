import { useEffect, useState, Dispatch, SetStateAction } from 'react';

const PREFIX = 'bulls-management-';

export function useLocalStorage<S>(
  key: string,
  initialValue?: S,
): [S, Dispatch<SetStateAction<S>>] {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);

    return jsonValue === null ? initialValue : JSON.parse(jsonValue);
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
