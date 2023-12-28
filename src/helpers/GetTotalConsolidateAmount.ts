export const getTotalAmount = (statData: any) =>
  statData?.reduce(
    (acc: number, card: any) =>
      acc + parseInt(card?.CONSOLIDATE_BALANCE || "0"),
    0
  );
