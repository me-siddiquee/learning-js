let calculation = localStorage.getItem('calculation') || '';


    function updateCalculation(value) {
      calculation += value;
      localStorage.setItem('calculation', calculation);
      // console.log(calculation);
      displayResult();
    }

    function displayResult() {
      document.querySelector('.result').innerHTML = calculation;
    }

    document.querySelector('.result').innerHTML = localStorage.getItem('calculation');