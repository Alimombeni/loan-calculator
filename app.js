//listen for submit
document.getElementById('loan-form').addEventListener('submit' , function (e){
    //hide results
    document.getElementById('results').style.display = 'none';
    //show loading
    document.getElementById('loading').style.display = 'block';
setTimeout(calculateResult , 2000);

e.preventDefault();
})


//calculateResult
function calculateResult () {
//ui vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const monthlyPayment = document.getElementById('monthly-payment');
    const years = document.getElementById('years');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
//=========================================================================
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 /12;
    const calculatedPayment = parseFloat(years.value) * 12;
//compute monthly payment
    const x = Math.pow(1+ calculatedInterest , calculatedPayment);
    const monthly = (principal*x*calculatedInterest) / (x-1);
if (isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayment).toFixed(2);
    totalInterest.value  =((monthly * calculatedPayment)-principal).toFixed(2);
    //show results
    document.getElementById('results').style.display = 'block';
    //hide loading
    document.getElementById('loading').style.display = 'none';
}else {
   showError('please check your numbers');
}
}
//showError function
function showError(error) {
    //show results
    document.getElementById('results').style.display = 'none';
    //hide loading
    document.getElementById('loading').style.display = 'none';


    //create a dvi element
  const errorDiv = document.createElement('div');
  //get element
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
  //add class
  errorDiv.className = 'alert alert-danger';
  //create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));
//insert error above heading
card.insertBefore(errorDiv  , heading);
//clear error after 3 seconds
    setTimeout(clearError , 3000);
}
function clearError() {
    document.querySelector('.alert').remove();
}

