$(window).on("load", function(){
    $(".cssload-container").delay(1000).fadeOut(500);
});

let num = document.querySelector('#txtn')
function tabuada(){
    let tab = document.querySelector('#result')
    if(num.value.length == 0){
        window.alert('Tem que colocar um número aqui 👇')
    } else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 10){
            let item = document.createElement('option')
            item.text =  `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}