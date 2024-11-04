var i = 0;
while (i < 4) {
    let cardContainer = document.createElement("div");
    let image = document.createElement("img");
    let title = document.createElement("p");
    let price = document.createElement("span");
    let buyNow = document.createElement("button");

    
    image.setAttribute("src", "https://th.bing.com/th/id/OIP.MZk__RXOEgaif8GCngydjwHaEo?w=316&h=197&c=7&r=0&o=5&dpr=1.4&pid=1.7");
    image.style.width = "500px";


    title.textContent = "Doraemon";
    price.textContent = "28328209";
    buyNow.innerText = "Watch Now";
    buyNow.style.display = "block";
    cardContainer.style.border = "2px solid black";
    cardContainer.style.borderRadius = "15px";
    cardContainer.style.padding = "15px";
    cardContainer.style.gap = "20px";
    cardContainer.style.display = "inline-block";
    cardContainer.style.background = "linear-gradient(indigo, orange)";
    cardContainer.style.margin = "15px";
    cardContainer.append(image, title, price, buyNow);
    document.body.appendChild(cardContainer);

    i++;
}
