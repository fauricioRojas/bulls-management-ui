export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: string) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const dateFormatter = (timestamp: number): string => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(timestamp);
  return new Intl.DateTimeFormat('es', options).format(date);
};

const formatter = new Intl.NumberFormat('es-CR', {
  style: 'currency',
  currency: 'COL',
  minimumFractionDigits: 0,
});
export const moneyFormatter = (money: number) => formatter.format(money).replace('COL', '₡');
