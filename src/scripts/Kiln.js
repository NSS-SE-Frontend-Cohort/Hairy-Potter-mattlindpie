

export const firePottery = (piece, kilnTemp) => {
    Object.defineProperty(piece, "fired", {value: true})
    
    if (kilnTemp > 2200) {
        Object.defineProperty(piece, "cracked", {value: true, writable: true})
    } else {
        Object.defineProperty(piece, "cracked", {value: false, writable: true})
    }
    return piece
}