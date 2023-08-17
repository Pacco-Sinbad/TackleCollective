const elem = document.querySelector("#delContent")


if (screen.width <= 488){
    elem.remove()
    
}

window.onresize = function(){ 
    location.reload(); 
}