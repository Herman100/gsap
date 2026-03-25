import {gsap} from "gsap"


document.getElementById("header").addEventListener("click", () => {
    alert("I got Clicked")
})



gsap.to("h1",{
    x:200
})