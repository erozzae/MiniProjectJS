function saklar(params){
    let lampu = document.getElementById("img-lamp");
    // let btnLampOn = document.getElementById("btn-lamp-on");
    // let btnLampOff = document.getElementById("btn-lamp-off");

    if(params == "on"){
        lampu.src  = "../img/on.png";
        // btnLampOn.className = "btn btn-light";
        // btnLampOn.innerHTML = "Matikan Lampu"; 
    }
    if(params == "off"){
        lampu.src  = "../img/off.png";
        // btnLampOff.className = "btn btn-primary";
        // btnLampOff.innerHTML = "Nyalakan Lampu"; 
    }
       

      
}