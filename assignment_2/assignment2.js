// Exercise #1
// Write your solution below
for (var i = 1; i <= 100; i++) {
    if (i%3 !== 0 && i%5 !== 0) {
    console.log(i)
    }
    else if (i%3 == 0 && i%5 !== 0) {
    console.log("fizz");
    }
    else if (i%3 !== 0 && i%5 == 0){
    console.log("buzz");
    }
    else if (i%3 == 0 && i%5 == 0){
    console.log("fizzbuzz");
    }
    else {
    console.log("error");  
    }
}



/* 
Write your explanation for Exercise #1 here
1. Started out by creating a for loop that spits out numbers 1-100. Choose 'for' as opposed to 'switch' because I'm intending to evaluate the values as boolean operation. 
2. Included a series of boolean operations evaluating if the current value of i as divisible by, 3, 5 or both, with no remainders. The relevant buzz word is then returned. 
3. Choose to check for false in both instances as the first boolean operator to make a faster decisions for the loop, trying to be efficient with my logic on behalf of the system?
4. Then if there was no remainder, meaning one of the 3 buzz combos was up, ran through 3 else if boolean checks to post the right one.
*/





// Exercise #2
// Write your solution below
var a = "# "
var b = " #"

var i=0
while (i<=7) {
    if (i%2 == 0) {
        console.log(a+a+a+a)
    }
    else { 
        console.log(b+b+b+b)
    }
    i++
}


/* 
Write your explanation for Exercise #2 here
1. Started declaring some variable with alternating pattern by chunk (starting with space or #) to simplify life
2. Introduced a counter variable to keep tabs on the number of rows
3. Wrote a while function to continue operating while the counter is less than 8 for total number of rows in the grid
4. Choose while not an if/else because this is based on pattern picking the a or b values, and to mix it up a bit. Actually maybe that was the prompt to choose switch rather than if/else? 
5. Easy function testing the even/odd counter variable, and alternating to post a 4x multiple of the a or b strings for the pattern grid
*/
