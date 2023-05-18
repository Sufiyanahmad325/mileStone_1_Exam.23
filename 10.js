function correctCartItemQuantities(cart) {
    const correctedCart = cart.map(quantity => quantity * 2);
    return correctedCart;
  }
  
  // Test the correctCartItemQuantities function
  const cart = [1, 2, 3, 4];
  const correctedCart = correctCartItemQuantities(cart);
  console.log('Corrected Cart:', correctedCart);
  