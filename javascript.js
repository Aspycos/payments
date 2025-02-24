class PaymentSystem {
    constructor() {
      this.startDate = this.getStartDate();
      this.endDate = this.calculateEndDate(this.startDate, 30); // 30 days trial period
    }
  
    getStartDate() {
      let startDate = localStorage.getItem('startDate');
      if (!startDate) {
        startDate = new Date().toISOString();
        localStorage.setItem('startDate', startDate);
      }
      return new Date(startDate);
    }
  
    calculateEndDate(startDate, days) {
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + days);
      return endDate;
    }
  
    checkAccess() {
      const currentDate = new Date();
      if (currentDate > this.endDate) {
        alert('Your trial period has expired. Please make a payment to continue using the product.');
        // Redirect to payment page or disable access to the product
        window.location.href = '/payment.html';
      } else {
        const daysLeft = Math.ceil((this.endDate - currentDate) / (1000 * 60 * 60 * 24));
        alert(`You have ${daysLeft} days left in your trial period.`);
      }
    }
  }
  
  // Usage
  const paymentSystem = new PaymentSystem();
  paymentSystem.checkAccess();