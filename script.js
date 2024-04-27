let box = document.querySelectorAll(".country");
box.forEach((grid)=>{
    grid.addEventListener("click",()=>{
        let parent = grid.parentElement;
        parent.remove();
    })
})