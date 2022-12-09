let color = true;
let main_block = document.querySelector('.main-block')

const wind_text = document.querySelector(".wind_text");
const second_celsium = document.querySelector(".second_celsium");
const temp = document.querySelector(".temp");
const sign_celsium = document.querySelector(".sign_celsium");
const temp_feelLike = document.querySelector(".temp_feelLike");
const wind  = document.querySelector(".wind")
const temp_text = document.querySelector(".temp_text")
const temp_feelLike_text = document.querySelector(".temp_feelLike_text")
const elements = [wind_text, second_celsium, temp, sign_celsium, temp_feelLike, wind, temp_text, temp_feelLike_text];

function changeToOrange() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = 'orange'
    }
}

function changeToBlack() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = 'black'
    }
}

function append_in_block() {
    const array_inBlock = [temp_text, temp_feelLike_text, wind_text, sign_celsium, second_celsium]
    for (let i = 0; i < array_inBlock.length; i++) {
        array_inBlock[i].style.display =  'inline-block'
    }
}

document.querySelector('.changeColorButton').addEventListener('click', function changeColorButton(params) {
    color = !color
    if(color){
    document.body.style.background = '#28282B'
    document.querySelector('.changeColorButton').style.background = 'orange'
    main_block.style.border = '1px solid orange'

        changeToOrange()
    }
    else{
        document.body.style.background = '#EDEADE'
        document.querySelector('.changeColorButton').style.background = '#36454F'
        main_block.style.border = '1px solid black'
        document.querySelector(".temp").style.color = 'black'

        changeToBlack()
    }
})


document.querySelector('.input').addEventListener("keypress", function(event) {
    const input = document.querySelector('.input').value
  if (event.key === "Enter") {

//for(let i = 0; i < signs.length; i++){
  //signs[i].style.display =  'inline-block'
//}
      append_in_block()

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=5488933573bee20246e8dc2177747d11`)
    .then((response) => response.json())
        .then(function(resp) {
          const temp_resp = resp.main.temp;
          document.querySelector('.temp').textContent =  Math.floor(temp_resp - 273.15)

        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=5488933573bee20246e8dc2177747d11`
        )
            .then(response => response.json())
            .then(function (resp) {
                let temp_resp = resp.main.temp; //TODO: Variable that never changed declare using 'const', also always do It with arr and object
                let temp = (document.querySelector('.temp').textContent = Math.floor(temp_resp - 273.15)); //TODO: It is simple action, you don't have to assign It in variable

          const temp_feelLike_resp = resp.main.feels_like
          const temp_feelLike = document.querySelector('.temp_feelLike').textContent = Math.floor(temp_feelLike_resp - 273.15)


            const wind_resp = resp.wind.speed
          document.querySelector('.wind').textContent = wind_resp
          })
    .catch(err => alert(`Погоды по этому пункту (${input}) к сожалению, на сайте нет.`))
  }
}
}
