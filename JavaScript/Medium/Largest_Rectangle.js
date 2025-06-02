// This is not the optimal solution as it runs in O(n^2), but the optimal
// solution using a monotonically increasing stack is so unintuitive it 
// constitutes being a "hard" problem, not medium. 
function largestRectangle(h){
    let max = 0;
    for(let i = 0; i < h.length; i++){
        let count = 0;
        for(let j = 0; j < h.length; j++){
            // reset count if prior to current element
            if(h[j] < h[i] && j < i){
                count = 0;
                continue;
            }
            // if after current element, impossible to create larger rectangle
            else if(h[j] < h[i] && j > i){
                max = Math.max(max, count * h[i]);
                break;
            }
            // smaller or equal to current element, include in rectangle
            else{
                count++;
                max = Math.max(max, count * h[i]);
            }
        }
    }
    return max;
}

console.log(largestRectangle([3, 2, 3])); // 6
console.log(largestRectangle([5])); // 5
console.log(largestRectangle([1, 2, 3, 4, 5])); // 9
console.log(largestRectangle([1, 3, 5, 9, 11])); // 18
console.log(largestRectangle([11, 11, 10, 10, 10])); // 50
console.log(largestRectangle([1, 3, 11, 9, 11])); // 27