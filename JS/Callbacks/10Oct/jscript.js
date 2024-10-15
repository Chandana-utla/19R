//Question1 

let products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Headphones', price: 100 },
    { name: 'Keyboard', price: 50 },
    { name: 'Mouse', price: 25 },
    { name: 'Monitor', price: 300 }
];

let selectedItems = [];
let totalAmount = 0;

for (let i = 0; i < products.length; i++) {
    let selectItem = confirm(`Do you want to add ${products[i].name} to your cart? (Price: $${products[i].price})`);
    
    if (selectItem) {
        selectedItems.push(products[i].name);
        totalAmount += products[i].price;
        alert(`${products[i].name} has been added to your cart.`);
    }
}

if (selectedItems.length > 0) {
    alert(`You have selected: ${selectedItems.join(", ")}.\nTotal: $${totalAmount}`);
  
    let confirmPurchase = confirm(`Do you want to confirm your purchase for $${totalAmount}?`);

    if (confirmPurchase) {
        alert('Thank you for your purchase! Your order is confirmed.');
    } else {
        alert('Your order was not confirmed. You can continue shopping.');
    }
} else {
    alert('You did not select any items.');
}

//Question2
const plan = prompt("Choose a subscription plan: \n1. Basic \n2. Premium \n3. VIP");
switch (plan) {
    case '1':
        alert("You have selected the Basic plan. Cost: $5/month.");
        break;
    case '2':
        alert("You have selected the Premium plan. Cost: $10/month.");
        break;
    case '3':
        alert("You have selected the VIP plan. Cost: $15/month.");
        break;
    default:
        alert("Invalid selection. Please choose a valid plan.");
}

//Question3
let confirmBooking = confirm("Do you want to book a ride?");
if (confirmBooking) {
    alert("Booking your ride... Please wait.");
    setTimeout(function () {
        alert("Your ride is confirmed! Driver is on the way.");
    }, 3000); 
} else {
    alert("Ride booking was cancelled.");
}

//Question4
let products1 = ['Laptop', 'Headphones', 'Keyboard'];

for (let i = 0; i < products1.length; i++) {
    const rating = prompt(`Rate the ${products1[i]} (1 to 5 stars):`);
    
    if (rating >= 1 && rating <= 5) {
        alert(`You rated the ${products1[i]}: ${rating} stars`);
    } else {
        alert("Invalid rating. Please rate between 1 and 5.");
    }
}

//Question5
let quality = prompt("Choose video quality: \n1. 720p \n2. 1080p \n3. 4K");

switch (quality) {
    case '1':
        alert("You selected 720p. Enjoy your video!");
        break;
    case '2':
        alert("You selected 1080p. Enjoy your video!");
        break;
    case '3':
        alert("You selected 4K. Enjoy your video in ultra-high definition!");
        break;
    default:
        alert("Invalid selection. Please choose a valid video quality.");
}

//Question6
let confirmLogout = confirm("Do you really want to log out?");

if (confirmLogout) {
    alert("Logging you out... Please wait.");
    setTimeout( function () {
        alert("You have been logged out. Redirecting to the login page.");
        
    }, 3000);
} else {
    alert("Logout cancelled. You are still logged in.");
}
