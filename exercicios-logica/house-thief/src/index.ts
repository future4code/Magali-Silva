export const maximumValueForTheft = (moneyList: number[]): number => {
    let evenIndex: number = 0
    let oddIndex: number = 0
    
    for (let i = 0; i < moneyList.length; i += 2) {
        evenIndex += moneyList[i]  
    }

    for (let i = 1; i < moneyList.length; i += 2) {
        oddIndex += moneyList[i] 
    }

    if (evenIndex > oddIndex) {
        return evenIndex
    } else {
        return oddIndex
    }    
}

