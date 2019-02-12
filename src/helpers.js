const shuffled = (array) => {
    let newArray = array.slice()
    for (let index = 0; index < newArray.length; index++) {
        const indexToSwap = randomInteger(newArray.length)
        const element = newArray[index];
        const elementToSwap = newArray[indexToSwap];
        newArray[indexToSwap] = element;
        newArray[index] = elementToSwap;
    }
    return newArray;
}

const randomInteger = (max) => Math.floor(Math.random() * max)

export {shuffled}