import { useState, useEffect } from 'react';
import { ISimpleStore } from '@cpmech/simple-state';

export const withUseObserver = (store: Omit<ISimpleStore, 'load'>) => (observerName: string) => {
  const [data, setData] = useState({
    error: '',
    ready: false,
  });

  useEffect(() => {
    // flag to prevent calling setData when the component is unmounted
    let finished = false;

    // must set the state right here and right now because the Gate
    // may have been already configured and we missed the notification
    if (!finished) {
      setData({
        error: store.error,
        ready: store.ready,
      });
    }

    // now we can listen to further notifications, if any
    const unsubscribe = store.subscribe(() => {
      if (!finished) {
        setData({
          error: store.error,
          ready: store.ready,
        });
      }
    }, observerName);

    // return clean-up function
    return () => {
      finished = true;
      unsubscribe();
    };

    // note dependencies
  }, [observerName]);

  return data;
};
