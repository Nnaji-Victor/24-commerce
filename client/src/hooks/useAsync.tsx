import * as React from "react";
import useSafeDispatch from './useSafeDispatch';

type AsyncState<D> =
  | {
      status: "idle";
      data?: null;
      error?: null;
      promise?: null;
    }
  | {
      status: "pending";
      data?: null;
      error?: null;
      promise: Promise<D>;
    }
  | {
      status: "resolved";
      data: D;
      error: null;
      promise: null;
    }
  | {
      status: "rejected";
      data: null;
      error: Error;
      promise: null;
    };

type AsyncAction<D> =
  | { type: "reset" }
  | { type: "pending"; promise: Promise<D> }
  | { type: "resolved"; data: D; promise?: Promise<D> }
  | { type: "rejected"; error: Error; promise?: Promise<D> };

function asyncReducer<D>(
  state: AsyncState<D>,
  action: AsyncAction<D>
): AsyncState<D> {
  switch (action.type) {
    case "pending": {
      return {
        status: "pending",
        data: null,
        error: null,
        promise: action.promise,
      };
    }
    case "resolved": {
      if (action.promise && action.promise !== state.promise) return state;
      return {
        status: "resolved",
        data: action.data,
        error: null,
        promise: null,
      };
    }
    case "rejected": {
      if (action.promise && action.promise !== state.promise) return state;
      return {
        status: "rejected",
        data: null,
        error: action.error,
        promise: null,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function useAsync<T>() {
  const [{ data, error, status }, dispatch] = React.useReducer<
    React.Reducer<AsyncState<T>, AsyncAction<T>>>(asyncReducer, {
    status: "idle",
    data: null,
    error: null,
  });

  const safeDispatch = useSafeDispatch(dispatch);

  const run = React.useCallback((promise: Promise<T>) => {
    safeDispatch({ type: "pending", promise });
    promise.then(
      (data) => {
        safeDispatch({ type: "resolved", data, promise });
      },
      (error) => {
        safeDispatch({ type: "rejected", error, promise });
      }
    );
  }, [safeDispatch]);

  return {
    error,
    status,
    data,
    run,
  };
}

export { useAsync };
