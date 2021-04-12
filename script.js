"use strict";

 
    for (let i=1; i <= 4; i++) {
        let schemes = document.createElement("div");
        document.getElementById("colorscheme").append(schemes);
        schemes.classList.add(`schemes${i}`);
        schemes.innerHTML = `<span>Scheme ${i}</span>`;
    }

    for (let i=1; i <= 4; i++){
        for (let j=1; j<= 5; j++) {
            let colors = document.createElement("div");
            document.querySelector(`.schemes${i}`).append(colors);
            colors.classList.add("c");
            colors.innerHTML = `
                <div id="c${i}"></div>    
            `; 
        
            colors.querySelector(`#c${i}`).style.backgroundColor = getColor(i, j);
                
                
            let divs = document.getElementById("result");
            divs.innerHTML = `
                <div id="box1" class="boxes"${i}>
                    <div id="box2" class="boxes"${i}>
                        <div id="box3" class="boxes"${i}></div> 
                    </div> 
                </div>     
                <div id="box4" class="boxes"${i}>
                    <div id="box5" class="boxes"${i}></div> 
                </div>     

            `;


            document.querySelector(`.schemes${i}`).addEventListener("click", function(){
                document.querySelector(`#box1`).style.backgroundColor = getColor(i, 2);
                document.querySelector(`#box2`).style.backgroundColor = getColor(i, 3);
                document.querySelector(`#box3`).style.backgroundColor = getColor(i, 4);
                document.querySelector(`#box4`).style.backgroundColor = getColor(i, 1);
                document.querySelector(`#box5`).style.backgroundColor = getColor(i, 5);
                document.getElementById("container").style.backgroundColor = getColor(i, j);
            })

            document.getElementById("bigger").addEventListener("click", function(){
                document.querySelector(".boxes").style.width = "90vw";
                document.querySelector(".boxes").style.height = "90vw";
            })
            
            document.getElementById("smaller").addEventListener("click", function(){
                document.querySelector(".boxes").style.width = "5vw";
                document.querySelector(".boxes").style.height = "5vw";
            })
            
            document.getElementById("stop").addEventListener("click", function(){
                let w = getComputedStyle(divs).getPropertyValue("width");
                let h = getComputedStyle(divs).getPropertyValue("height");
            
                document.querySelector(".boxes").style.width = w;
                document.querySelector(".boxes").style.height = h;
            })
        }
        

    }

function frontPage(){
    for (let i=1; i <= 1; i++) {
        document.querySelector(`#box1`).style.backgroundColor = getColor(i, 2);
        document.querySelector(`#box2`).style.backgroundColor = getColor(i, 3);
        document.querySelector(`#box3`).style.backgroundColor = getColor(i, 4);
        document.querySelector(`#box4`).style.backgroundColor = getColor(i, 1);
        document.querySelector(`#box5`).style.backgroundColor = getColor(i, 5);
        document.getElementById("container").style.backgroundColor = getColor(i, 5);

        document.querySelector(`.schemes${i}`).classList.add("selected");
    }

    for (let i=1; i <= 4; i++) { 

        document.querySelector(`.schemes${i}`).classList.add("hover");


        document.querySelector(`.schemes${i}`).addEventListener("click", function(){
            removeClassFromElement(document.querySelector(".selected"), "selected");
            document.querySelector(`.schemes${i}`).classList.add("selected");
        })
    }
}

frontPage();

//Kommentar för att testa att det funkar med GitHub