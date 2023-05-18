// Function to validate password
function validatePassword(password, confirmPassword) {
    if (password === confirmPassword) {
      console.log("Password Matched. Password validation Successful.");
    } else {
      console.log("Password didn't match. Password validation unsuccessful.");
    }
  }
  
  // Test the function
  const password = "myPassword123";
  const confirmPassword = "myPassword123";
  validatePassword(password, confirmPassword);
  