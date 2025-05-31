const orders = [
  {
    id: 1,
    customer: "John",
    items: [
      { product: "Laptop", price: 1000, quantity: 1 },
      { product: "Mouse", price: 25, quantity: 2 }
    ]
  },
  {
    id: 2,
    customer: "Jane",
    items: [
      { product: "Phone", price: 800, quantity: 1 },
      { product: "Case", price: 20, quantity: 1 }
    ]
  }
];


//a) Calculate the total value for each order:

const orderTotals = orders.map(function(order) {
  var total = order.items.reduce(function(sum, item) {
    return sum + item.price * item.quantity;
  }, 0);
  return {
    id: order.id,
    customer: order.customer,
    total: total
  };
});

console.log("Order Totals:", orderTotals);


//b) Find all unique products across all orders:
 var allProducts = [];

for (var i = 0; i < orders.length; i++) {
  var items = orders[i].items;
  for (var j = 0; j < items.length; j++) {
    if (allProducts.indexOf(items[j].product) === -1) {
      allProducts.push(items[j].product);
    }
  }
}

console.log("Unique Products:", allProducts);

//c) Get the customer who spent the most money:
 
var maxOrder = orderTotals[0];

for (var i = 1; i < orderTotals.length; i++) {
  if (orderTotals[i].total > maxOrder.total) {
    maxOrder = orderTotals[i];
  }
}

console.log("Top Customer:", maxOrder.customer);

//d) Create a flat array of all items from all orders:
var allItems = [];

for (var i = 0; i < orders.length; i++) {
  allItems = allItems.concat(orders[i].items);
}

console.log("All Items:", allItems);

//e) Count the total quantity of all items sold:
 
var totalQuantity = 0;

for (var i = 0; i < allItems.length; i++) {
  totalQuantity += allItems[i].quantity;
}

console.log("Total Quantity Sold:", totalQuantity);
