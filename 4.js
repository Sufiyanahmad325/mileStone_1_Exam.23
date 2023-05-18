function findHighestMarks(marks) {
    let highestMarks = 0;
  
    marks.forEach(mark => {
      highestMarks = mark > highestMarks ? mark : highestMarks;
    });
  
    console.log('Highest marks:', highestMarks);
  }
  
  // Test the findHighestMarks function
  const marks = [85, 92, 76, 88, 94];
  findHighestMarks(marks); // Output: Highest marks: 94
  