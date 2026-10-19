import { useEffect, useState } from 'react';
import { getErrorMessage } from '../services/api';

export const useResource = (fetcher, params = {}, revision = 0) => {
  const [state, setState] = useState({ data: null, isLoading: true, error: null });
  const serialized = JSON.stringify(params);
  useEffect(() => {
    const controller = new AbortController();
    setState({ data: null, isLoading: true, error: null });
    fetcher(JSON.parse(serialized), { signal: controller.signal })
      .then(data => { if (!controller.signal.aborted) setState({ data, isLoading: false, error: null }); })
      .catch(error => { if (!controller.signal.aborted) setState({ data: null, isLoading: false, error: getErrorMessage(error) }); });
    return () => controller.abort();
  }, [fetcher, serialized, revision]);
  return state;
};
