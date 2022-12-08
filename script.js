let color = true;
let main_block = document.querySelector('.main-block');
document.querySelector('.changeColorButton').addEventListener('click', function changeColorButton(params) {
    color = !color;
    if (color == true) {
        //TODO: don't need to compare with boolean, 'if' automatically convert any value to boolean
        document.body.style.background = '#28282B';
        document.querySelector('.changeColorButton').style.background = 'orange';
        main_block.style.border = '1px solid orange';
        document.querySelector('.temp').style.color = 'orange'; //TODO: create arr with strings value in 'querySelector', iterate by It in loop establish color. ALSO MAKE IT IN SEPARATE FUNCTION AND USE BELOW!
        document.querySelector('.sign_celsium').style.color = 'orange';
        document.querySelector('.temp_feelLike').style.color = 'orange';
        document.querySelector('.wind').style.color = 'orange';
        document.querySelector('.temp_text').style.color = 'orange';
        document.querySelector('.temp_feelLike_text').style.color = 'orange';
        document.querySelector('.wind_text').style.color = 'orange';
        document.querySelector('.second_celsium').style.color = 'orange';
    } else {
        document.body.style.background = '#EDEADE';
        document.querySelector('.changeColorButton').style.background = '#36454F';
        main_block.style.border = '1px solid black';
        document.querySelector('.temp').style.color = 'black';
        document.querySelector('.sign_celsium').style.color = 'black';
        document.querySelector('.temp_feelLike').style.color = 'black';
        document.querySelector('.wind').style.color = 'black';
        document.querySelector('.temp_text').style.color = 'black';
        document.querySelector('.temp_feelLike_text').style.color = 'black';
        document.querySelector('.wind_text').style.color = 'black';
        document.querySelector('.second_celsium').style.color = 'black';
    }
});

document.querySelector('.input').addEventListener('keypress', function (event) {
    let input = document.querySelector('.input').value;
    if (event.key === 'Enter') {
        let signs = document.querySelectorAll('.sign_celsium');
        //for(let i = 0; i < signs.length; i++){
        //signs[i].style.display =  'inline-block'
        //}
        document.querySelector('.temp_text').style.display = 'inline-block'; //TODO: Also possible create array and iterate by it
        document.querySelector('.temp_feelLike_text').style.display = 'inline-block';
        document.querySelector('.wind_text').style.display = 'inline-block';
        document.querySelector('.sign_celsium').style.display = 'inline-block';
        document.querySelector('.second_celsium').style.display = 'inline-block';

        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=5488933573bee20246e8dc2177747d11`
        )
            .then(response => response.json())
            .then(function (resp) {
                let temp_resp = resp.main.temp; //TODO: Variable that never changed declare using 'const', also always do It with arr and object
                let temp = (document.querySelector('.temp').textContent = Math.floor(temp_resp - 273.15)); //TODO: It is simple action, you don't have to assign It in variable

                let temp_feelLike_resp = resp.main.feels_like;
                //TODO: same like below comments
                let temp_feelLike = (document.querySelector('.temp_feelLike').textContent = Math.floor(
                    temp_feelLike_resp - 273.15
                ));

                let wind_resp = resp.wind.speed;
                let wind = (document.querySelector('.wind').textContent = wind_resp); //TODO: same like below comments
            })
            .catch(err => alert(`Погоды по этому пункту (${input}) к сожалению, на сайте нет.`));
    }
});
