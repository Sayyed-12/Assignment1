
 //Q2:

 const products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
  { id: 2, name: "Book", price: 15, category: "Education", inStock: false },
  { id: 3, name: "Phone", price: 699, category: "Electronics", inStock: true },
  { id: 4, name: "Desk", price: 299, category: "Furniture", inStock: true }
];


//a) Create a new array with prices converted to include a 10% tax

const productsWithTax = products.map(product => {
  const taxAmount = product.price * 0.10; // Calculate 10% tax
  const priceWithTax = product.price + taxAmount; // Add tax to original price
  return {
    ...product, // Copy all original properties (id, name, category, inStock)
    price: parseFloat(priceWithTax.toFixed(2)) // Update the price, rounding to 2 decimal places
  };
});

console.log("Products with 10% Tax:", productsWithTax);



//b) Generate an array of product summaries in the format: "Product: [name] - $[price] ([category])"
 

const productSummaries =products.map(product=>{
    return `product: ${product.name}-$${product.price} (${product.category})`;
});
console.log("product Sumaries:",productSummaries);


//c) Create a new array where each product has a "discountPrice" property (20% off original pric


const getDiscount=(price)=>{
    return price-(price*(20/100)); //or return price*0.80;
}

const productsWithDiscountPrice=products.map(product=>{
    return{
        id:product.id,
        name:product.name,
        category:product.category,
        inStock:product.inStock,
        discountPrice:getDiscount(product.price)
    } 
 });
console.log(productsWithDiscountPrice);



