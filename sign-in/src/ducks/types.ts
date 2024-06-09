type ActionType<T> = {
  type: T;
  payload: any;
};

type State<D> = {
  metadata?: {
    page: number;
    totalData: number;
    totalPage: number;
  };
  error?: string;
  data?: D;
};

type Dispatch<AT> = {
  (payload: any): AT;
};

type Reducer<S, AT> = {
  (state: S, action: AT): S;
};

export type {ActionType, State, Dispatch, Reducer};
