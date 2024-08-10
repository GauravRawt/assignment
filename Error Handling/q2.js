class LoginError extends Error {
    constructor(message) {
      super(message);
      this.name = "LoginError";
    }
  }
  
  class UsernameRequiredError extends LoginError {
    constructor() {
      super("Username is required.");
      this.name = "UsernameRequiredError";
    }
  }
  
  class PasswordRequiredError extends LoginError {
    constructor() {
      super("Password is required.");
      this.name = "PasswordRequiredError";
    }
  }
  
  class InvalidCredentialsError extends LoginError {
    constructor() {
      super("Invalid username or password.");
      this.name = "InvalidCredentialsError";
    }
  }
  

  const validCredentials = {
    'user1': 'password123',
    'user2': 'mypassword',
  };
  
  function login(username, password) {
    if (!username) {
      throw new UsernameRequiredError();
    }
    if (!password) {
      throw new PasswordRequiredError();
    }
    if (!validCredentials[username] || validCredentials[username] !== password) {
      throw new InvalidCredentialsError();
    }
    
    return "Login successful!";
  }
  
  try {
    const result = login('user1', 'password123');
    console.log(result);
  } catch (error) {
    console.error(error.name + ': ' + error.message);
  }
  