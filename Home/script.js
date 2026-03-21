function navigate_to_try_now () {
    let clicked = false;
    document.getElementById("try-now").addEventListener("click", ()=>{
        if(!clicked) {
            console.log("Button Clicked");
            clicked = true;
        }
        else {
            console.log("Button already clicked");
        }
        const element = document.getElementById("register-container");
        element.scrollIntoView({behavior: 'smooth'});
    })
}   