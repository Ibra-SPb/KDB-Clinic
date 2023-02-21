export type Stock = {
  id: number,
  title: string,
  description: string,
  img: string,
  valid: Date,
};

export type State = {
  stocks: Stock[],
  error: undefined | string,
};
