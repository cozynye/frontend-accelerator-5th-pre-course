export const parseNumericInput = (value: string): number | null => {
  const numericString = value.replace(/,/g, '').replace(/[^0-9]/g, '');
  if (numericString === '') {
    return null;
  }
  return parseInt(numericString, 10);
};
