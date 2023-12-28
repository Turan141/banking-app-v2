export const getMaxValue = (currencies: IAccountVO[]) => {
  if (!currencies?.length) return;

  return Math.max(
    ...currencies?.map((currency: IAccountVO) => +currency?.CONSOLIDATE_BALANCE)
  );
};
