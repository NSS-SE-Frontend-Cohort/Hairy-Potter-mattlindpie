
const catalog = [] 

export const toSellOrNotToSell = (piece) => {
    if (piece.weight >= 6 && piece.cracked === false) {
        Object.defineProperty(piece, "price", {value:40})
        catalog.push(piece)

    }
    
    if (piece.weight < 6 && piece.cracked === false) {
        Object.defineProperty(piece, "price", {value:20})
        catalog.push(piece)

    } 

    return piece

}

export const usePottery = () => {
    let catalogCopy = JSON.parse(JSON.stringify(catalog))
    return catalogCopy
}