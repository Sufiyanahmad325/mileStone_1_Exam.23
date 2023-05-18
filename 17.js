const customer = {
    name: 'John Doe',
    balance: 1000,
  
    deposit: function(amount) {
      this.balance += amount;
      console.log(`Deposited ${amount} into ${this.name}'s account. New balance: ${this.balance}`);
    },
  
    withdraw: function(amount) {
      if (amount > this.balance) {
        console.log(`Insufficient funds for ${this.name}. Current balance: ${this.balance}`);
      } else {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from ${this.name}'s account. New balance: ${this.balance}`);
      }
    }
  };
  
  // Test the deposit and withdraw methods
  customer.deposit(500); // Deposited 500 into John Doe's account. New balance: 1500
  customer.withdraw(200); // Withdrawn 200 from John Doe's account. New balance: 1300
  customer.withdraw(2000); // Insufficient funds for John Doe. Current balance: 1300
  