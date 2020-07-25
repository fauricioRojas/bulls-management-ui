import { useEffect, useRef } from 'react';

export const useDidUpdate = (callback: () => void, props: any[]) => {
  const mountedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
    } else {
      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, props);
};
