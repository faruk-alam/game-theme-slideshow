const slideEliment = document.querySelectorAll(".element");
let elimentCount = 1;
setInterval(() => {
    elimentCount ++;
    let targetEliment = document.querySelector(".current");
    targetEliment.classList.remove("current");
    if(elimentCount > slideEliment.length){
        slideEliment[0].classList.add("current");
        elimentCount = 1;
    }
    else{
        targetEliment.nextElementSibling.classList.add("current");
    }
}, 2000);