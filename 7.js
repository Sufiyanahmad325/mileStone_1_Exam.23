function removeDuplicates(cart) {
    const uniqueCart = [];
  
    cart.forEach(item => {
      if (!uniqueCart.includes(item)) {
        uniqueCart.push(item);
      }
    });
  
    return uniqueCart;
  }
  
  // Test the removeDuplicates function
  const shoppingCart = ['item1', 'item2', 'item1', 'item3', 'item2'];
  const uniqueItems = removeDuplicates(shoppingCart);
  console.log('Unique items in the cart:', uniqueItems);
  