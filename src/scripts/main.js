// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { usePottery } from "./PotteryCatalog.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 6, 8)
let bowl = makePottery("bowl", 5, 3)
let dish = makePottery("dish", 8, 5)
let plate = makePottery("plate", 6, 1)
let vase = makePottery("vase", 9, 10)

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2000)
let firedBowl = firePottery(bowl, 2450)
let firedDish = firePottery(dish, 2200)
let firedPlate = firePottery(plate, 2500)
let firedVase = firePottery(vase, 2100)


// Determine which ones should be sold, and their price
let pricedMug = toSellOrNotToSell(firedMug)
let pricedBowl = toSellOrNotToSell(firedBowl)
let pricedDish = toSellOrNotToSell(firedDish)
let pricedPlate = toSellOrNotToSell(firedPlate)
let pricedVase = toSellOrNotToSell(firedVase)

console.log(JSON.stringify(usePottery()))
// Invoke the component function that renders the HTML list

