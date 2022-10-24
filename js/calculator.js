function clearScreen(){
    document.getElementById("result").value = "";
}

function display(params){
    document.getElementById("result").value += params;
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}