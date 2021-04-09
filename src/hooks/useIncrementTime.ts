import produce from 'immer';
import { useCallback } from 'react';
import { useSetState } from '../state';

const useIncrementTime = () => {
  const setState = useSetState();
  const addTodo = useCallback(() => {
    setState((s) => produce(s, (draft) => {
      draft.time++;
    }));
  }, [setState]);
  return addTodo;
};

export default useIncrementTime;
