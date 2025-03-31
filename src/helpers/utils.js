export const displayMoney = (amount) =>
  amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

export const calculateTotal = (items) =>
  items.reduce((acc, item) => acc + item, 0);
