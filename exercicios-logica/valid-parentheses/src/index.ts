export const validParentheses = (string: string): boolean => {
    const stack: string[] = [];

    for (let character of string) {
        if (
            character === "(" || 
            character === "[" || 
            character === "{"
        ) {
            stack.push(character);

        } else {
            const lastOpeningCharacter = stack.pop();

            if (!lastOpeningCharacter) {
                return false

            } else if (
                (lastOpeningCharacter === "(" && character !== ")") ||

                (lastOpeningCharacter === "[" && character !== "]") ||

                (lastOpeningCharacter === "{" && character !== "}")
            ) {
                return false;
            }
        }
    }

    if (stack.length > 0) {
        return false;
    }

    return true;
}