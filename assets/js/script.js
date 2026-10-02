let storiesEl = document.querySelector(".stories");
let storyLeft = document.querySelector(".story-left");
let storyRight = document.querySelector(".story-right");


function verificarScroll(){
    if(storiesEl.scrollLeft === 0){
        storyLeft.querySelector(".icon-area").style.display = "none";
    }else{
        storyLeft.querySelector(".icon-area").style.display = "flex";
    }

    if(storiesEl.scrollLeft + storiesEl.clientWidth >= storiesEl.scrollWidth){
        storyRight.querySelector(".icon-area").style.display = "none";
    }else{
        storyRight.querySelector(".icon-area").style.display = "flex";
    }

}

storyLeft.addEventListener("click",()=>{
    storiesEl.scrollTo({
        left: storiesEl.scrollLeft - 150,
        behavior: 'smooth'
    })

    verificarScroll();
})


storyRight.addEventListener("click",()=>{
    storiesEl.scrollTo({
        left: storiesEl.scrollLeft + 150,
        behavior:'smooth'
    })

    verificarScroll();
})

