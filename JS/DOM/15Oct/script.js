// CSS Styles for cards and button
let styles = `
    .card {
        border: 1px solid #ddd;
        padding: 20px;
        margin: 10px;
        display: 
    }
    .container {
        margin-top: 20px;
    }
    #seeMore {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
    }
`;

// Append the styles to the head
const styleSheet = document.createElement("style");//This line creates a new <style> element. This element can hold CSS rules that define the styles for your HTML document.

styleSheet.type = "text/css";//This sets the type attribute of the <style> element to "text/css", indicating that the contents of this style element are CSS. While this is generally not necessary in modern browsers (as "text/css" is the default), it can be included for clarity or compatibility.
styleSheet.innerText = styles;//This line sets the innerText of the <style> element to the CSS styles contained in the variable styles.
document.head.appendChild(styleSheet);//Finally, this line appends the newly created <style> element to the <head> section of the document. Once appended, the styles defined in styleSheet.innerText become active and affect the rendering of the document.

// Data for cards
const cardsData = [
    { title: 'Card 1', content: 'This is the content of Card 1.' },
    { title: 'Card 2', content: 'This is the content of Card 2.' },
    { title: 'Card 3', content: 'This is the content of Card 3.' },
    { title: 'Card 4', content: 'This is the content of Card 4.' }
];

// Function to show cards
function showCards() {
    const cardContainer = document.getElementById('cardContainer');

    // Loop through the card data
    for (let i = 0; i < cardsData.length; i++) {
        const card = document.createElement('div');
        card.className = 'card';

        const cardTitle = document.createElement('h3');
        cardTitle.textContent = cardsData[i].title;
        card.appendChild(cardTitle);

        const cardContent = document.createElement('p');
        cardContent.textContent = cardsData[i].content;
        card.appendChild(cardContent);

        // Append the card to the container
        cardContainer.appendChild(card);

        // Show the card after a delay
        setTimeout(function ()  {
            card.style.display = 'block';
        }, 2000 * (i + 1)); // Delay based on the index
    }
}
