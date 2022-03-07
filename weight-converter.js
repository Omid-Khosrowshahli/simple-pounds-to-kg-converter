const form = document.getElementById('form');
const weightInPounds = document.getElementById('weight-in-pounds');
const weightInKilograms = document.getElementById('weight-in-kg');

form.addEventListener('submit', (e) =>{
  e.preventDefault();

  if(weightInPounds.value >= 0){
    weightInKilograms.innerHTML = (weightInPounds.value / 2.2).toFixed(2);

    setTimeout(() =>{
      weightInPounds.value = '';
      weightInKilograms.innerHTML = '';
    }, 3500);
  }
  else{
    document.getElementById('error-message').innerHTML = "Invalid entry!";
    weightInKilograms.innerHTML = '';

    setTimeout(() =>{
      document.getElementById('error-message').innerHTML = '';
      weightInPounds.value = '';
    }, 2000);
  }
});