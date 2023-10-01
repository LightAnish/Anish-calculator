let input = document.getElementById('user-input');
let btn = document.querySelectorAll('button');

btn.forEach(element =>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target.textContent)
        if(e.target.textContent === "C"){
            input.innerHTML = "";
        }
        else if(e.target.textContent === "X"){
            input.innerHTML = input.innerHTML.slice(0,-1)
        }
        else if(e.target.textContent === "="){
            input.innerHTML = eval(input.innerHTML)
        }
        else{
            input.innerHTML += e.target.textContent
        }
    })
})
