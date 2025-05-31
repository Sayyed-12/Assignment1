 
const inventory = [
  { sku: "A001", name: "Widget A", stock: 150, reorderLevel: 50, category: "Tools" },
  { sku: "B002", name: "Widget B", stock: 25, reorderLevel: 30, category: "Parts" },
  { sku: "C003", name: "Widget C", stock: 75, reorderLevel: 40, category: "Tools" },
  { sku: "D004", name: "Widget D", stock: 10, reorderLevel: 20, category: "Parts" }
];
//a) Find items that need reordering
 
const getItemsToReorder = (inventory) =>
  inventory.filter(item => item.stock <= item.reorderLevel);

console.log("a) Items needing reorder:", getItemsToReorder(inventory));


//b) Total stock value by category (stock × 10)
 
const getStockValueByCategory = (inventory) =>
  inventory.reduce((acc, item) => {
    const value = item.stock * 10;
    acc[item.category] = (acc[item.category] || 0) + value;
    return acc;
  }, {});

console.log("b) Total stock value by category:", getStockValueByCategory(inventory));


//c) Item with the lowest stock % relative to reorder level
 
const getLowestStockPercentageItem = (inventory) =>
  inventory.reduce((lowest, item) => {
    const currentPercent = item.stock / item.reorderLevel;
    const lowestPercent = lowest.stock / lowest.reorderLevel;
    return currentPercent < lowestPercent ? item : lowest;
  });

console.log("c) Item with lowest stock %:", getLowestStockPercentageItem(inventory));


//d) Category Report (total items + reorder-needed items)

const generateCategoryReport = (inventory) =>
  inventory.reduce((report, item) => {
    if (!report[item.category]) {
      report[item.category] = { totalItems: 0, reorderNeeded: 0 };
    }
    report[item.category].totalItems++;
    if (item.stock <= item.reorderLevel) {
      report[item.category].reorderNeeded++;
    }
    return report;
  }, {});

console.log("d) Category Report:", generateCategoryReport(inventory));


//e) Sort by urgency (how far below reorder level)
 
const sortByUrgency = (inventory) =>
  [...inventory].sort((a, b) =>
    (b.reorderLevel - b.stock) - (a.reorderLevel - a.stock)
  );

console.log("e) Sorted by Urgency:", sortByUrgency(inventory));
