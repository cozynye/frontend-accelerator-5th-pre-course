import { formatNumber } from 'shared/utils';
import { colors, ListRow } from 'tosslib';

export const CalculationResultItem = ({ label, price }: { label: string; price: number }) => {
  const CALCULATION_RESULT_ITEM_STYLES = {
    topProps: { color: colors.grey600 },
    bottomProps: { fontWeight: 'bold', color: colors.blue600 },
  } as const;
  return (
    <ListRow.Texts
      type="2RowTypeA"
      top={label}
      bottom={`${formatNumber(price ?? 0)}원`}
      {...CALCULATION_RESULT_ITEM_STYLES}
    />
  );
};
