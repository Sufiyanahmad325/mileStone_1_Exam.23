function capitalizeFirstName(name) {
    const firstLetter = name.charAt(0);
    const capitalizedFirstLetter = firstLetter === firstLetter.toLowerCase() ? firstLetter.toUpperCase() : firstLetter;
    const capitalizedName = capitalizedFirstLetter + name.slice(1);
    return capitalizedName;
  }
  
  // Test the capitalizeFirstName function
  const name1 = "john";
  const name2 = "Alice";
  console.log(capitalizeFirstName(name1)); // Output: John
  console.log(capitalizeFirstName(name2)); // Output: Alice
  