function calculateTotalBill(costPerDish, numPeople) {
    const totalBill = costPerDish * numPeople;
    const billPerPerson = totalBill / numPeople;
  
    const result = {
      totalBill: totalBill,
      billPerPerson: billPerPerson
    };
  
    return result;
  }
  
  // Test the calculateTotalBill function
  const costPerDish = 1000;
  const numPeople = 4;
  const billDetails = calculateTotalBill(costPerDish, numPeople);
  console.log('Total Bill:', billDetails.totalBill);
  console.log('Bill Per Person:', billDetails.billPerPerson);
  