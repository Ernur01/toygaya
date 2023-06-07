function cost_action() {
    /* Сбор данных с полей для ввода */
    let vedushyi = document.querySelector('#vedushyi_select_id').value
    let show = document.querySelector("#show_select_id").value
    let rest = document.querySelector("#rest_select_id").value
    let gosti = document.querySelector("#gosti_select_id").value

    /* Расчет стоимсти */
    let sum = Number(vedushyi) + Number(show) + (Number(rest)*Number(gosti))

    /* Показ стоимсти */
    let cost = document.getElementById("cost")
    cost.innerHTML = sum
    
   }



