
function myFunction(x){
    if(x.matches){
        document.getElementById('description').style.display = 'none';
    }
    else {
        document.getElementById('description').style.display = 'initial';
    }
} 
let x = window.matchMedia("(max-width:500px)");
myFunction(x);
x.addListener(myFunction);
