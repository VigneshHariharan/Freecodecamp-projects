 function description(x){
    if(x.matches){
        document.body.style.backgroundColor = "yellow";
    }
    else
    {
        document.body.style.backgroundColor = "pink";
    }
}
let x = window.matchMedia("(max-width : 400px)");
description(x);
x.addListener(description)
console.log("comeon do")