let btn2 = document.querySelector("#btn2");
let body = document.querySelector("body");
let mode = "light";

const Func =() =>{
    if(mode==="light"){
        mode="dark";
        console.log("Dark");
        body.classList.add("dark");
        body.classList.remove("light")
    }
    else{
        mode= "light";
        console.log("Light");
        body.classList.add("light")
        body.classList.remove("dark")
    }
}

btn2.addEventListener("click", Func);
