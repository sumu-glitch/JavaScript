const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector(".result");
  const message = document.querySelector(".message");
  // console.log(height);
  // console.log(weight);
  
  if (height == "" || height < 0 || isNaN(height)) {
      result.innerHTML = `Please Enter valid height ${height}`;
    } else if (weight == "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please Enter valid weight ${weight}`;
    }else{
      const bmi = (weight / (( height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>Your BMI = ${bmi}</span>`
    if(bmi == 18){
    message.innerHTML = `you are normal`
    }else if(bmi > 18 && bmi <= 25 ){
    message.innerHTML = `you are fit`
    }else{
         message.innerHTML = `you are OverWeighted!`
    }
  }
  
});
