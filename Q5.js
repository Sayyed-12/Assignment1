const cartItems = [
  { name: "T-shirt", price: 25, quantity: 2 },
  { name: "Jeans", price: 60, quantity: 1 },
  { name: "Sneakers", price: 80, quantity: 1 },
  { name: "Hat", price: 15, quantity: 3 }
];

// 5a) Calculate the total cost of all items
const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
console.log("  Total cost of all items:", totalCost);

// 5b) Find the most expensive single item (by price)
const mostExpensiveItem = cartItems.reduce((max, item) => item.price > max.price ? item : max, cartItems[0]);
console.log("  Most expensive single item:", mostExpensiveItem);

// 5c) Count the total number of items in the cart (sum of quantities)
const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
console.log("  Total number of items:", totalItems);

// 5d) Create a summary object with totalItems, totalCost, and averageItemPrice
const averageItemPrice = totalCost / totalItems;
const summary = {
  totalItems,
  totalCost,
  averageItemPrice
};
console.log("  Summary object:", summary);

// 5e) Find the item with the highest total value (price × quantity)
const highestValueItem = cartItems.reduce((max, item) => (item.price * item.quantity) > (max.price * max.quantity) ? item : max, cartItems[0]);
console.log("  Item with highest total value:", highestValueItem);
