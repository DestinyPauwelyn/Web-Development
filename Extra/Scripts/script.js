let currency = document.querySelector('.currency')
let parsedCurrency = parseFloat(currency.innerHTML)

let clickerCost = document.querySelector('.clicker-cost')
let parsedClickerCost = parseFloat(clickerCost.innerHTML)
let clickerLevel = document.querySelector('.clicker-level')
let clickerIncrease = document.querySelector('.clicker-increase')
let parsedClickerIncrease = parseFloat(clickerIncrease.innerHTML)

let pickaxeCost = document.querySelector('.pickaxe-cost')
let parsedPickaxeCost = parseFloat(pickaxeCost.innerHTML)
let pickaxeLevel = document.querySelector('.pickaxe-level')
let pickaxeIncrease = document.querySelector('.pickaxe-increase')
let parsedPickaxeIncrease = parseFloat(pickaxeIncrease.innerHTML)

let minerCost = document.querySelector('.miner-cost')
let parsedMinerCost = parseFloat(minerCost.innerHTML)
let minerLevel = document.querySelector('.miner-level')
let minerIncrease = document.querySelector('.miner-increase')
let parsedMinerIncrease = parseFloat(minerIncrease.innerHTML)

let currencyPerClick = 1
let currencyPerSec = 0

let CPC = document.getElementById("CPC")
let CPS = document.getElementById("CPS")

function incrementcurrency() {
    currency.innerHTML = Math.round(parsedCurrency += currencyPerClick)
}
function buyClicker() {
    if(parsedCurrency >= parsedClickerCost){
        parsedCurrency -= parsedClickerCost
        currency.innerHTML = Math.round(parsedCurrency)

        clickerLevel.innerHTML++

        parsedClickerIncrease = parseFloat((parsedClickerIncrease * 1.03).toFixed(2))
        clickerIncrease.innerHTML = parsedClickerIncrease
        currencyPerClick += parsedClickerIncrease

        parsedClickerCost *=1.10
        clickerCost.innerHTML = Math.round(parsedClickerCost)
    }
}
function buyPickaxe() {
    if(parsedCurrency >= parsedPickaxeCost){
        parsedCurrency -= parsedPickaxeCost
        currency.innerHTML = Math.round(parsedCurrency)

        pickaxeLevel.innerHTML++

        parsedPickaxeIncrease = parseFloat((parsedPickaxeIncrease * 1.03).toFixed(2))
        pickaxeIncrease.innerHTML = parsedPickaxeIncrease
        currencyPerSec += parsedPickaxeIncrease

        parsedPickaxeCost *=1.10
        pickaxeCost.innerHTML = Math.round(parsedPickaxeCost)
    }
}
function buyMiner() {
    if(parsedCurrency >= parsedMinerCost){
        parsedCurrency -= parsedMinerCost
        currency.innerHTML = Math.round(parsedCurrency)

        minerLevel.innerHTML++

        parsedMinerIncrease = parseFloat((parsedMinerIncrease * 1.03).toFixed(2))
        minerIncrease.innerHTML = parsedMinerIncrease
        currencyPerSec += parsedMinerIncrease

        parsedMinerCost *=1.10
        minerCost.innerHTML = Math.round(parsedMinerCost)
    }
}

setInterval(() => {
    parsedCurrency += currencyPerSec / 10
    currency.innerHTML = Math.round(parsedCurrency)
    CPC.innerHTML = Math.round(currencyPerClick)
    CPS.innerHTML = Math.round(currencyPerSec)
},100)