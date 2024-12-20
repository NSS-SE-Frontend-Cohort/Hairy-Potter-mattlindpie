

export const firePottery = (piece, kilnTemp) => {
    Object.defineProperty(piece, "fired", {value: true})
    
    if (kilnTemp > 2200) {
        Object.defineProperty(piece, "cracked", {value: true})
    } else {
        Object.defineProperty(piece, "cracked", {value: false})
    }

    return piece
}