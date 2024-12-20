
let primaryKey = 0

export const makePottery = (givenShape, givenWeight, givenHeight) => {
    let piece = {
        shape: givenShape,
        weight: givenWeight,
        height: givenHeight,
        id: ++primaryKey
    }
    return piece
}