let indg= prompt("Are you an indigent household? Yes or No "); // Prompts to add the outside variable
indg= indg.toUpperCase(); //Added to allow any form of Yes/No ie yes, Yes, YES
let water= prompt("Please enter the number of liters of water you used"); //Prompts value variable
if (water <= 10500 && indg === "YES"){
        console.log("You owe R0."); // allows for indigent households not to pay for up to 10.5 kl of water
    }
else if (water <= 6000 && indg === "NO"){
        console.log(`You owe R ${Math.round (1000 * (water * 0.01573)) / 1000}`); // calculates payments for regular household using 0-6kl water
    }    
else if (6000< water && water <= 10500 && indg === "NO"){
        console.log(`You owe R ${Math.round (1000 * ((94.38) + ((water - 6000) * 0.02238))) / 1000}`);// calculates payments for regular household using 6kl-10.5kl water
    }
else if (10500< water && water <=35000 && indg === "NO") {
        console.log(`You owe R ${Math.round (100 * ((195.09) + ((water - 10500) * 0.03177))) / 100}`);// // calculates payments for regular household using 10.5-35kl water
}
else if (10500< water && water <=35000 && indg === "YES") {
    console.log(`You owe R ${Math.round (100 * (((water - 10500) * 0.03177))) / 100}`); // calculates payments for indigent household using 10-35kl water
}
else if (water >= 35000 && indg === "NO") {
        console.log(`You owe R ${Math.round (100 * ((973.455) + ((water - 35000) * 0.06976))) / 100}`);// calculates payments for regular household using 35kl + water
}
else if (water >= 35000 && indg === "YES") {
    console.log(`You owe R ${Math.round (100 * ((778.365) + ((water - 35000) * 0.06976))) / 100}`);// calculates payments for indigent household using 35kl+ water
}
/* Important notes and sticking points were using the .toUpperCase() to allow for the computer to always read the functions Yes or No
It won't allow a user to put Y/N but covers any form of typing yes or no. An alternative could be .toLowerCase() as well.
The Math.round was also useful because we are talking about money and you can't pay R122.452342 also it's government they'd round up haha
There were certain point where I had to round to the decimal by 100 and 1000. In the 100 case the numbers were big enough to round to the correct numbers
in the 1000 cases the numbers could be too small that the best outcome would be to round by 1000.

Calculations could be done by the computer but I decided to manually put in the values to save time and computing power. If this were part of a large project
rather have less code than more as it could add to time it takes to process the outcomes.

&& had to be used inbetween all conditions to make sure they were all seperated.

Used === because I like to be extra cautious that it's the same value and type. Probably not necessary but went with it anyway.

I also did this as making the calculator for the personal user which could be used as to check how much you might owe rather than just saying input amount.
Prompt and outcome could have been less personalized ie for a government employee as well.
*/