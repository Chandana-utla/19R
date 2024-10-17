//1.print smallest digit in the given number 
var num=String(7180)
var smallest=num[0]
for(var j=0;j<num.length;j++)
{
    if(num[j]<smallest)
    smallest=num[j]
}
console.log(smallest);

//2.print first 10 negative
for (let i = 1; i <= 10; i++) {
    console.log(-i);
}
 for(let p=-1;p>=-10;p--)
 {
   console.log(p);
    
 }

//3.reverse order of negative number
for (let i = 10; i >0; i--) {
    console.log(-i);
}

// //4.smallest,largest which occurs first 
function findSmallLarge(num) {
    let numStr = num.toString();
    let smallest = numStr[0];
    let largest = numStr[0];
    
    for (let i = 1; i < numStr.length; i++) {
        if (numStr[i] < smallest) {
            smallest = numStr[i];
        }
        if (numStr[i] > largest) {
            largest = numStr[i];
        }
    }

    let firstOccur = numStr.indexOf(smallest) < numStr.indexOf(largest) ? 'Smallest' : 'Largest';

    console.log(`Smallest digit: ${smallest}`);
    console.log(`Largest digit: ${largest}`);
    console.log(`${firstOccur} occurred first.`);
}

findSmallLarge(35891);

//5.prime number in given number

let number = 98983; 
let primeDigits = '';

for (let i = 0; i < String(number).length; i++) {
    let digit = Number(String(number)[i]);

    if (digit > 1) { 
        let isPrime = true;

    
        for (let j = 2; j < digit; j++) {
            if (digit % j === 0) {
                isPrime = false;
                break; 
            }
        }

        if (isPrime) {
            primeDigits += digit + ' '; 
        }
    }
}

console.log('Prime digits in the number:', primeDigits.trim());
