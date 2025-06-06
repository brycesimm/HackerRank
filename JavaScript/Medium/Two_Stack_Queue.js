function processData(input) {
    let queryArr = input.split(/\r?\n/).slice(1); // this splits based on new line and ignores first element
    let stackOne = [];
    let stackTwo = [];
    for(let query of queryArr){
        let type = +query.substring(0,1);
        
        switch(type){
            case 1:
                let element = query.substring(2);
                stackOne.push(element); // always push to stackOne
                break;
            case 2:
                if(stackTwo.length === 0){ // if stackTwo is empty, refill it so that the top has first element
                    while(stackOne.length > 0){
                        stackTwo.push(stackOne.pop());
                    }
                }
                stackTwo.pop(); // pop first element
                break;
            case 3:
                if(stackTwo.length === 0){ // same as in case 2
                    while(stackOne.length > 0){
                        stackTwo.push(stackOne.pop());
                    }
                }
                let firstElement = stackTwo.pop(); // get first element from top of stackTwo
                stackTwo.push(firstElement);
                console.log(firstElement);
                break;
            default:
                break;
        }
    }
} 

let input = `10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2`;

console.log("Test case 1: ");
processData(input);
console.log("--------");

input = `10
1 42
3
1 25
2
3
1 14
2
3`;

console.log("Test case 2: ");
processData(input);
console.log("--------");

input = `100
1 23334137
1 213585005
1 865236554
1 664450041
1 13658878
2
1 466472544
3
1 348639301
1 441011370
1 852035053
1 639141099
1 833164795
1 579923876
1 386061934
1 222925781
1 811898458
1 263001269
1 35656229
1 44936167
1 590017989
1 212380613
1 675339011
1 844566937
1 918983610
3
1 954319846
1 625306548
1 991984842
1 345786159
3
2
1 663949728
1 387139300
1 661994633
1 69497261
1 865241101
1 743219652
1 934887730
1 748761848
1 561614367
1 444221016
2
2
1 204943991
2
1 473258408
1 728280313
1 879087292
3
1 540015716
1 606607594
2
2
2
1 833433207
1 697006777
2
1 109164259
1 295382004
1 772520466
1 687692928
3
1 855088898
1 165359997
3
1 343824334
1 914972377
1 286114141
3
1 387058125
1 937202165
1 604893503
1 646610769
1 764643886
1 89565892
1 361412257
1 877732550
1 106056596
3
1 432943632
1 794959764
1 585545000
1 406674004
1 155924148
1 320707319
2
3
1 430237750
1 571366600
3
1 145038710
1 309728383
3
1 391397089
1 857205232
1 71900098
1 432240830
1 914813875
3`;

console.log("Test case 3: ");
processData(input);
console.log("--------");