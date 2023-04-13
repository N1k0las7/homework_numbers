
$(`#but1`).click(f1)
function f1(){
let x = Number ($(`#in1`).val());
let y = Number ($(`#in2`).val());
let r = (x / y);
$(`#result1`).text(`Твоя скорость: ` + r + `Km/h`);
}

$(`#but2`).click(f2)
function f2(){
let x = Number ($(`#in3`).val());
let y = Number ($(`#in4`).val());
let r = Math.floor(x / y);
let d = (x- y * r)
$(`#result1`).text(`Колличество шоколадок: ` + r + ` шт` +` Сдача: ` + d + ` Руб`);
}
$(`#but3`).click(f3)
function f3(){
let x = Number ($(`#in5`).val());
const y = 0.90 
let r = (x * y);
$(`#result1`).text(r + `€`);
}




