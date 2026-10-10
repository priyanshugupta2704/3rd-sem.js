const displayResult = document.getElementById("result");
function append (val){
    display.value += val;
}
function clearDisplay(){
    display.value ="";
}
function calculate (){
    try{
        display.value = eval(display.value);
    }catch{
        diplay.value="Error";
    }
}