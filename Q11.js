const inventory = [
  { sku: "A001", name: "Widget A", stock: 150, reorderLevel: 50, category: "Tools" },
  { sku: "B002", name: "Widget B", stock: 25, reorderLevel: 30, category: "Parts" },
  { sku: "C003", name: "Widget C", stock: 75, reorderLevel: 40, category: "Tools" },
  { sku: "D004", name: "Widget D", stock: 10, reorderLevel: 20, category: "Parts" }
];

//a) Find items that need reordering (stock <= reorderLevel)
 
function getItemsToReorder(inventory) {
  var result = [];
  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].stock <= inventory[i].reorderLevel) {
      result.push(inventory[i]);
    }
  }
  return result;
}

var reorderItems = getItemsToReorder(inventory);
console.log("Items needing reorder:", reorderItems);


//b) Calculate total stock value by category
//(Assume price = stock × 10)
 
function getStockValueByCategory(inventory) {
  var categoryTotals = {};

  for (var i = 0; i < inventory.length; i++) {
    var item = inventory[i];
    var value = item.stock * 10;

    if (!categoryTotals[item.category]) {
      categoryTotals[item.category] = 0;
    }

    categoryTotals[item.category] += value;
  }

  return categoryTotals;
}

var stockValues = getStockValueByCategory(inventory);
console.log("Total stock value by category:", stockValues);


//c) Find the item with the lowest stock percentage relative to reorder level
 
function getLowestStockPercentageItem(inventory) {
  var lowestItem = inventory[0];
  var lowestPercent = (inventory[0].stock / inventory[0].reorderLevel);

  for (var i = 1; i < inventory.length; i++) {
    var currentPercent = inventory[i].stock / inventory[i].reorderLevel;
    if (currentPercent < lowestPercent) {
      lowestPercent = currentPercent;
      lowestItem = inventory[i];
    }
  }

  return lowestItem;
}

var lowestStockItem = getLowestStockPercentageItem(inventory);
console.log("Item with lowest stock %:", lowestStockItem);



// d) Create a report showing category, total items, and items needing reorder
 
function generateCategoryReport(inventory) {
  var report = {};

  for (var i = 0; i < inventory.length; i++) {
    var item = inventory[i];
    var cat = item.category;

    if (!report[cat]) {
      report[cat] = { totalItems: 0, reorderNeeded: 0 };
    }

    report[cat].totalItems += 1;

    if (item.stock <= item.reorderLevel) {
      report[cat].reorderNeeded += 1;
    }
  }

  return report;
}

var categoryReport = generateCategoryReport(inventory);
console.log("Category Report:", categoryReport);


//e) Sort items by urgency (how far below reorder level they are)
 
function sortByUrgency(inventory) {
  var copied = inventory.slice();

  copied.sort(function(a, b) {
    var urgencyA = a.reorderLevel - a.stock;
    var urgencyB = b.reorderLevel - b.stock;
    return urgencyB - urgencyA;
  });

  return copied;
}

var sortedUrgency = sortByUrgency(inventory);
console.log("Sorted by Urgency:", sortedUrgency);