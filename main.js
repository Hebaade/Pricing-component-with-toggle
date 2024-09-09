const check=document.getElementById('check');
let prices=document.querySelectorAll('.address')
console.log(prices)
function changePrice(){
    let yearly=[360,490,800]
    let month=[150,200,300]
    if(check.checked){
    for (let i = 0; i < month.length; i++) {
       prices[i].innerText=month[i]
    }
    }
    else{
        for (let i = 0; i < yearly.length; i++) {
    prices[i].innerText=yearly[i]
    }
}
}
check.addEventListener('change',changePrice)
changePrice()