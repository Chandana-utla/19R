var products=["watch","laptop","watch"]
function addToCart()
{
var input=prompt("enter your product")
if(input){
    for(elem of products){
        var itemFound=false;
        if(input==elem){
            console.log("you have added ${input} item ");
            alert(`you have added ${input} to cart`);
            itemFound=true;
            break;

        }
    }
    if(!itemFound)
    {
        alert("we don't have ${input} in our basket");
    }
}
else{
    alert("select one item and add it to cart")
}
}
addToCart()