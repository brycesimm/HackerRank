// Honestly I had to get this solution from ChatGPT and walk through it because
// the solution is so unintuitive there is a 0% chance I would have gotten it perfect
// on my own. The premise of the problem is trivial to understand, but keeping track of
// both bounds of a rectangle with a single stack is an intense mental load. Nonetheless,
// I am bombarding this solution with comments to demonstrate my understanding so as to 
// show I am not simply taking the solution and not learning. 
function largestRectangle(h){
    let max = 0;
    // Stack stores indices of heights, not the heights themselves
    // The stack maintains a *monotonically increasing* order of height values
    let stack = [];
    // Add a 0-height bar to flush out remaining heights at the end
    h.push(0);
    for(let i = 0; i < h.length; i++){
        // we pop the top of the stack when there are elements, and when the current element is
        // smaller than the one on the top of the stack. This implies that the height at the top
        // cannot extend its rectangle any further to the right, so we can calculate its area and
        // those prior that are also bigger than the current height.
        while(stack.length > 0 && h[i] < h[stack[stack.length - 1]]){
            let top = stack.pop();
            // this is the height of the rectangle we are calculating
            let height = h[top];
            // if the stack is empty, we can use the current index as the width as 
            // i is implied to be the right-most bound of the rectangle being calculated and the 
            // left-most bound of the rectangle would be the beginning. 
            // if the stack is not empty, then we take the difference between the current index
            // and the index at the top of the stack minus one to get the index prior to "top". 
            // This is because if the stack isn't empty, it implies there is an element to 
            // the left of top that is smaller (because the stack is monotonically increasing in 
            // reference to heights) and therefore that is the left bound. 
            let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            let area = height * width;
            max = Math.max(max, area);
        }
        stack.push(i);
    }

    return max;
}
console.log(largestRectangle([2, 1, 2])); // 3
console.log(largestRectangle([3, 2, 3])); // 6
console.log(largestRectangle([5])); // 5
console.log(largestRectangle([1, 2, 3, 4, 5])); // 9
console.log(largestRectangle([1, 3, 5, 9, 11])); // 18
console.log(largestRectangle([11, 11, 10, 10, 10])); // 50
console.log(largestRectangle([1, 3, 11, 9, 11])); // 27