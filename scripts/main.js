const myHeading = document.querySelector('h1');
myName = 'Harald';
wert = multiply(20,5);
myHeading.textContent = 'Hello' + myName + wert;


function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}


