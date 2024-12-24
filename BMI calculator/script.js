const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`; 
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`; 
    } else {
        
        //show the result
        results.innerHTML = `<span>${bmi}</span>`;
      }
      
      switch (true) {
        case (bmi < 18.6):
            results.innerHTML = `<span>${bmi}</span> is Under Weight`;
          break;
        case (bmi >= 18.6 && bmi < 24.9):
            results.innerHTML = `<span>${bmi}</span> is Normal range`;
          break;
        default:
            results.innerHTML = `<span>${bmi}</span> is Overweight`;
      }
      
    //   console.log(grade); // Output: B 
})