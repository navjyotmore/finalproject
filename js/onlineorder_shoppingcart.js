let menu = '{"menu":[' +
'{"Name":"Spicy Rollups","Price":"15" },' +
'{"Name":"Mini Calzones","Price":"10" },' +
'{"Name":"Strawberry salad with poppy seed dressing","Price":"5" },' +
'{"Name":"Apple Pomegranate salad","Price":"5" },' +
'{"Name":"Angel Food Cake","Price":"5" },' +
'{"Name":"Healthy Date truffles","Price":"5" },' +
'{"Name":"Mango Mastani","Price":"5" },' +
'{"Name":"Strawberry Mess with fruit coulis","Price": "10" }]}';

let obj = JSON.parse(menu);

function removeCartItem(){
    document.getElementById('display').innerHTML = '$' + 0
    for(var i = 0; i < 8; i++){
     document.getElementsByClassName('qty')[i].value = 0
    }
}

function updateCart(){
    let total = 0
    for(var i = 0; i < 8; i++){
        let price = parseFloat(obj.menu[i].Price)
        let quantity = document.getElementsByClassName('qty')[i].value
        total = total + price * quantity
    }
    document.getElementById('display').innerHTML = '$' + total
}