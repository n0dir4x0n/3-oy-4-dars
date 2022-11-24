let birthDate = new Date("03-08-1991")


let yil = +prompt("Tug'ilgan yilingiz?");
let oy = +prompt("Tug'ilgan oyingizni kiriting")
let kun = +prompt("Tug'ilgan kuningizni kiriting")


let year = new Date().getFullYear()
let month = new Date().getMonth() + 1
let day = new Date().getDate()
alert(`Siz ${yil - year}yil ${oy - month}oy ${kun - day}kun yashadingiz!`)