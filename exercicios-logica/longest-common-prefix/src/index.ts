export const longestCommonPrefix = (strings: string[]): string => {
    let commonPrefix = ""
    
    if(strings.length === 0) {
        return commonPrefix
    }  

    for(let i = 0; i < strings[0].length; i++) {
        const currentCharacter = strings[0][i]
        
        for(let j = 0; j < strings.length; j++) {
            if(strings[j][i] !== currentCharacter) {
                return commonPrefix
            }
        }
        
        if(currentCharacter) {
            commonPrefix += currentCharacter
        }
    }
    
    return commonPrefix
};

