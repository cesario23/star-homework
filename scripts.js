
let counter = 0;
var counterDisplay = document.getElementById("#counter");


function addNumber (){
    if(counter >= 0){
        counter = counter+1;
        counterRenderer();
        startComponent();
    }else{
        counter = counter +1;
        counterRenderer();
    }
}

function substract1 (){
    if(counter > 0){
        counter = counter -1;
        counterRenderer();
        deleteStar();
    }else{
        counter = counter -1;
        counterRenderer();
    }

}

function counterRenderer(){
    counterDisplay.innerText = counter;
}


function startComponent(){
    const section = document.querySelector(".star-container")
    const starBox = document.createElement("div");
    starBox.innerHTML =`
    
    <div class = "star-box">
    <img src="https://clipartart.com/images/rainbow-star-clipart-7.png"/>
    </div>
    `
    section.appendChild(starBox)
}

function deleteStar(){
    const section = document.querySelector(".star-container")
    section.removeChild(section.lastElementChild)
}
