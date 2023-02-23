export type Result = {
  id: number;
  userId: number;
  path: string;
};

export type State = {
  results: Result[];
  error: undefined | string;
};
