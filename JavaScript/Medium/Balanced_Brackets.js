function isBalanced(s){
    if(s.length % 2 !== 0){
        return 'NO';
    }
    else{
        let stack = [];
        let array = [...s];
        for(let i = 0; i< array.length; i++){
            let bracket = array[i];
            if(bracket === '[' || bracket === '(' || bracket === '{'){
                stack.push(bracket);
            }else{
                let lastBracket = stack.pop();
                if(bracket == ']' && lastBracket != '['){
                    return 'NO';
                }
                else if(bracket == ')' && lastBracket != '('){
                    return 'NO';
                }
                else if(bracket == '}' && lastBracket != '{'){
                    return 'NO';
                }
            }
        }
        if(stack.length == 0){
            return 'YES';
        }else{
            return 'NO';
        }
    }
}

let input = `{[(])}`;
console.log(isBalanced(input)); // NO
input = `{(([])[])[]}`;
console.log(isBalanced(input)); // YES
input = `{(([])[])[]]}`;
console.log(isBalanced(input)); // NO
input = `{(([])[])[]}[]`;
console.log(isBalanced(input)); // YES
input = `[()][{}()][](){}([{}(())([[{}]])][])[]([][])(){}{{}{[](){}}}()[]({})[{}{{}([{}][])}]`;
console.log(isBalanced(input)); // YES
input = `{{}(`;
console.log(isBalanced(input)); // NO