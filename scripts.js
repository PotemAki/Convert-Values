const button = document.getElementById('js-button')

const inputC = document.getElementById('inputC')
const outputC = document.getElementById('outputC')
const inputF = document.getElementById('inputF')
const outputF = document.getElementById('outputF')

const inputKg = document.getElementById('inputkg')
const outputLb = document.getElementById('outputlb')
const inputLb = document.getElementById('inputlb')
const outputKg = document.getElementById('outputkg')

const inputKm = document.getElementById('inputkm')
const outputMi = document.getElementById('outputmi')
const inputMi = document.getElementById('inputmi')
const outputKm = document.getElementById('outputkm')

const alertMsg = document.getElementById(`alert`)

button.addEventListener('click', () => {
    outputC.innerText = getCelsius() + ` °F`;
    outputF.innerText = getFahrenheit() + ` °C`;
    outputLb.innerText = getPounds() + ` lbs`;
    outputKg.innerText = getKilograms() + ` kg`;
    outputMi.innerText = getMiles() + ` mi`;
    outputKm.innerText = getKilometers() + ` km`;

    alertMsg.innerText = 'done!'

    setTimeout(function(){
        alertMsg.innerText = ''
    }, 450);
})
//temp
function getCelsius() {
    return Math.round((inputC.value * 9/5 + 32) * 100) /100
}
function getFahrenheit() {
    return Math.round(((inputF.value - 32) * 5/9) * 100) /100
}
//weight
function getPounds() {
    return Math.round((inputKg.value * 2.2046) * 100) /100
}
function getKilograms() {
    return Math.round((inputLb.value / 2.2046) * 100) /100
}
//lenght
function getMiles() {
    return Math.round((inputKm.value * 0.62137) * 100) /100
}
function getKilometers() {
    return Math.round((inputMi.value * 1.60934) * 100) /100
}

//stoping from entering unlimited numbers
function limitKeypress(event, value, maxLength) {
    if (value != undefined && value.length >= maxLength) {
    event.preventDefault();
    }
}
