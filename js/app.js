let key = "ema_live_QYQSEIR4yOzKmOmKmgsFpKeHScQ0sOQlIfeTk4nN";

let btn = document.querySelector(".btn");
let result = document.querySelector(".result");

btn.addEventListener("click", async(e)=>{
    e.preventDefault();

    result.innerHTML = '<img src="css/spin.svg" alt="" width = 36px></img>'

    let email = document.querySelector(".email").value;
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    let data = await fetch(url);
    let res = await data.json();

    let str = '';
    for(key of Object.keys(res)){
        str = str+`<div><b>${key}</b>: ${res[key]}</div>`;
    }
    result.innerHTML = str;
})
  
  