function printInvertedRightTriangle(i) {
    for (let row = i; row >= 1; row--) {
      let pattern = '';
      for (let j = 1; j <= row; j++) {
        pattern += '*';
      }
      console.log(pattern);
    }
  }
  
  // Test the printInvertedRightTriangle function
  const numRows = 5;
  printInvertedRightTriangle(numRows);
  