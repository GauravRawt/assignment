function processPayment(amount, cardNumber, expirationDate) {
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error('Invalid payment amount');
    }
    if (!cardNumber || !/^\d{16}$/.test(cardNumber)) {
      throw new Error('Invalid card number');
    }
    if (!expirationDate) {
      throw new Error('Invalid expiration date');
    }
    const now = new Date();
    const [expMonth, expYear] = expirationDate.split('/').map(Number);
    const expDate = new Date(expYear, expMonth - 1); 
    if (expDate < now) {
      throw new Error('Invalid expiration date');
    }
    console.log('Payment processed successfully');
  }

  try {
    processPayment(100, '1234567812345678', '12/2025');
  } catch (error) {
    console.error(error.message);
  }
  