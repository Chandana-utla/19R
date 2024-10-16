
function showCards() {
    let cardContainer = document.getElementById("cardContainer");
    cardContainer.style.display = "flex";
    cardContainer.style.flexWrap = "wrap";  
    cardContainer.style.gap = "10px";  
    for (let i = 0; i < 6; i++) {  
        setTimeout(function () {
            cardContainer.innerHTML += `<div style="display: flex; flex-direction: column; align-items: center; padding: 10px; border: 1px solid #ccc; width: 150px;">
                    <img src="https://th.bing.com/th/id/OIP.Ukpbo7nhSqiRN-ejZpyMXgHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7" style="width: 100%; height: auto;">
                    <h1 style="font-size: 16px; margin: 10px 0 5px;">Card ${i + 1}</h1>
                    <p style="font-size: 14px; margin: 0;">Watch ${i + 1}</p>
                </div>
            `;
        }, 2000 * i);
    }
}
