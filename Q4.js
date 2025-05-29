const salesData = [
  { month: "Jan", sales: 15000, region: "North" },
  { month: "Feb", sales: 18000, region: "South" },
  { month: "Mar", sales: 22000, region: "North" },
  { month: "Apr", sales: 19000, region: "East" },
  { month: "May", sales: 25000, region: "West" },
  { month: "Jun", sales: 21000, region: "South" }
];

// 4a) Filter months where sales exceeded $20,000
const monthsAbove20k = salesData.filter(item => item.sales > 20000).map(item => item.month);
console.log("  Months with sales above $20,000:", monthsAbove20k);

// 4b) Find the first month where sales were below $20,000
const firstBelow20k = salesData.find(item => item.sales < 20000)?.month || null;
console.log("  First month with sales below $20,000:", firstBelow20k);

// 4c) Check if any region had sales above $24,000
const anyAbove24k = salesData.some(item => item.sales > 24000);
console.log("  Any region had sales above $24,000?", anyAbove24k);

// 4d) Verify if all months had sales above $10,000
const allAbove10k = salesData.every(item => item.sales > 10000);
console.log("  All months have sales above $10,000?", allAbove10k);

 
/*
4 a) another approach 

const monthsAbove20k = salesData.filter(function(item) {
  return item.sales > 20000;
}).map(function(item) {
  return item.month;
});

console.log("4a) Months with sales above $20,000:", monthsAbove20k);
*/
