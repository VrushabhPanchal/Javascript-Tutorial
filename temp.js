let inputTemp = document.getElementById("inputTemp");
let toFehrenhite = document.getElementById("toFehrenhite");
let toCelsius = document.getElementById("toCelsius");
let result = document.getElementById("result");
let converterBtn = document.getElementById("converterBtn");
let temp;

converterBtn.addEventListener('click',function(event){
    event.preventDefault();
        if(toFehrenhite.checked){
            temp = Number(inputTemp.value);
            temp = temp * 9/5 + 32;
            // result.textContent = "You selected C to F";
            result.textContent = temp.toFixed(1) + "F";
        }
        else if(toCelsius.checked){
            temp = Number(inputTemp.value);
            temp = (temp - 32) * (5/9);
            // result.textContent = "You selected F to C";
            result.textContent = temp.toFixed(1) + "C";
        }
        else{
            result.style.backgroundColor = "red";
            result.textContent = "Select Unit";
        }
    
    });
