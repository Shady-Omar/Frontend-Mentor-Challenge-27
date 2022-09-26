let toggle = document.querySelector("#radio-toggle");
let price = document.querySelector("#price");
let pv = document.querySelector("#pv")

price.textContent = `${16}.00`
pv.textContent = `${100}K`

let output = document.querySelector("#ageOutputId");
let range = document.querySelector("#fader");


range.addEventListener('click', () => {
    if (output.textContent == '0') {
        price.textContent = `${8}.00`
        pv.textContent = `${10}K`
    } else if (output.textContent == '25') {
        price.textContent = `${12}.00`
        pv.textContent = `${50}K`
    } else if (output.textContent == '50') {
        price.textContent = `${16}.00`
        pv.textContent = `${100}K`
    } else if (output.textContent == '75') {
        price.textContent = `${24}.00`
        pv.textContent = `${500}K`
    } else if (output.textContent == '100') {
        price.textContent = `${36}.00`
        pv.textContent = `${1}M`
    }
    
    
})


toggle.addEventListener('click', () => {
    if (price.textContent == `${8}.00` ||price.textContent == `${16}.00` ||price.textContent == `${24}.00` ||price.textContent == `${36}.00`) {
        price.textContent = `${parseInt(price.textContent) * .75}.00`
    } else if (price.textContent == `${6}.00` ||price.textContent == `${9}.00` ||price.textContent == `${12}.00` ||price.textContent == `${18}.00`||price.textContent == `${27}.00`) {
        price.textContent = `${parseInt(price.textContent) / .75}.00`
    }
});