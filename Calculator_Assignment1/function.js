const answer = document.getElementById("answer");

function keyDisplay(input){
    answer.value += input;
}

function clearDisplay(){
    answer.value = "";
}

function calculate(){
    try{
        answer.value = eval(answer.value);
    }
   catch(error){
     answer.value = "error";
   }
}