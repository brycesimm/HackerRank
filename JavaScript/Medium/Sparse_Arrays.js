function matchingStrings(stringList, queries) {
    let newQueries = queries;
    let map = newQueries.map((element) => {
        let listCopy = stringList;
        let count = 0;
        let index = listCopy.indexOf(element);
        while (index !== -1) {
            count++;
            listCopy.splice(index, 1);
            index = listCopy.indexOf(element);
        }
        return count;
    });
    return map;
}

stringList = ['aba', 'baba', 'aba', 'xzxb'];
queries = ['aba', 'xzxb', 'ab'];
console.log(matchingStrings(stringList, queries));

stringList = ['def', 'de', 'fgh'];
queries = ['de', 'lmn', 'fgh'];
console.log(matchingStrings(stringList, queries));


function matchingStrings2(stringList, queries){
    let result = [];
    for(let i = 0; i < queries.length; i++){
        let count = 0;
        for(let j = 0; j < stringList.length; j++){
            if(queries[i] == stringList[j]){
                count++;
            }
        }
        result.push(count);
    }
    return result;
}

stringList = ['aba', 'baba', 'aba', 'xzxb'];
queries = ['aba', 'xzxb', 'ab'];
console.log(matchingStrings2(stringList, queries));

stringList = ['def', 'de', 'fgh'];
queries = ['de', 'lmn', 'fgh'];
console.log(matchingStrings2(stringList, queries));