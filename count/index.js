let count = 0

document.getElementById("Down").onclick = function(){
    count -=1;
    document.getElementById("CountLabel").innerHTML = count;

}

document.getElementById("Down").onclick = function(){
    count -=1;
    document.getElementById("CountLabel").innerHTML = count;

}

document.getElementById("Increase").onclick = function(){
    count +=1;
    document.getElementById("CountLabel").innerHTML = count;

}
document.getElementById("Reset").onclick = function(){
    count = 0;
    document.getElementById("CountLabel").innerHTML = count;

}