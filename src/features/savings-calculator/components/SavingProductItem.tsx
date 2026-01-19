import { SavingsProduct } from 'shared/types';
import { formatNumber } from 'shared/utils';
import { colors, ListRow } from 'tosslib';

export const SavingProductItem = ({ product }: { product: SavingsProduct }) => {
  const SAVING_PRODUCT_ITEM_STYLES = {
    topProps: { fontSize: 16, fontWeight: 'bold', color: colors.grey900 },
    middleProps: { fontSize: 14, color: colors.blue600, fontWeight: 'medium' },
    bottomProps: { fontSize: 13, color: colors.grey600 },
  } as const;
  return (
    <ListRow.Texts
      type="3RowTypeA"
      top={product.name}
      middle={`연 이자율: ${product.annualRate}%`}
      bottom={`${formatNumber(product.minMonthlyAmount)}원 ~ ${formatNumber(product.maxMonthlyAmount)}원 | ${product.availableTerms}개월`}
      {...SAVING_PRODUCT_ITEM_STYLES}
    />
  );
};
