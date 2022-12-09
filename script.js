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
let orange_elements = [wind_text, second_celsium, temp, sign_celsium, temp_feelLike, wind, temp_text, temp_feelLike_text];

function changeToOrange() {
    for (let i = 0; i < orange_elements.length; i++) {
        orange_elements[i].style.color = 'orange'
    }
}

function changeToBlack() {
    for (let i = 0; i < orange_elements.length; i++) {
        orange_elements[i].style.color = 'black'
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
let input = document.querySelector('.input').value
  if (event.key === "Enter") {
//for(let i = 0; i < signs.length; i++){
  //signs[i].style.display =  'inline-block'
//}
  document.querySelector('.temp_text').style.display =  'inline-block'
  document.querySelector('.temp_feelLike_text').style.display =  'inline-block'
  document.querySelector('.wind_text').style.display =  'inline-block'
  document.querySelector('.sign_celsium').style.display =  'inline-block'
  document.querySelector('.second_celsium').style.display =  'inline-block'

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=5488933573bee20246e8dc2177747d11`)
    .then((response) => response.json())
        .then(function(resp) {
          const temp_resp = resp.main.temp;
          document.querySelector('.temp').textContent =  Math.floor(temp_resp - 273.15)


          const temp_feelLike_resp = resp.main.feels_like
          const temp_feelLike = document.querySelector('.temp_feelLike').textContent = Math.floor(temp_feelLike_resp - 273.15)


          let wind_resp = resp.wind.speed
          document.querySelector('.wind').textContent = wind_resp
          })
    .catch(err => alert(`Погоды по этому пункту (${input}) к сожалению, на сайте нет.`))
  }
})
