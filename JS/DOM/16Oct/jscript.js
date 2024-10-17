
var arr = [
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://th.bing.com/th/id/OIP.Ukpbo7nhSqiRN-ejZpyMXgHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "https://th.bing.com/th/id/OIP.Ukpbo7nhSqiRN-ejZpyMXgHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
      "rating": {
        "rate": 4.1,
        "count": 259
      }
    },
    {
      "id": 3,
      "title": "Mens Cotton Jacket",
      "price": 55.99,
      "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      "category": "men's clothing",
      "image": "https://th.bing.com/th/id/OIP.Ukpbo7nhSqiRN-ejZpyMXgHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
      "rating": {
        "rate": 4.7,
        "count": 500
      }
    },
    {
      "id": 4,
      "title": "Mens Casual Slim Fit",
      "price": 15.99,
      "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      "category": "men's clothing",
      "image": "https://th.bing.com/th/id/OIP.Ukpbo7nhSqiRN-ejZpyMXgHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
      "rating": {
        "rate": 2.1,
        "count": 430
      }
    },
    {
      "id": 5,
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "category": "jewelery",
      "image": "https://th.bing.com/th/id/OIP.Ukpbo7nhSqiRN-ejZpyMXgHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
      "rating": {
        "rate": 4.6,
        "count": 400
      }
    },
    {
      "id": 6,
      "title": "Solid Gold Petite Micropave ",
      "price": 168,
      "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
      "category": "jewelery",
      "image": "https://th.bing.com/th/id/OIP.Ukpbo7nhSqiRN-ejZpyMXgHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
      "rating": {
        "rate": 3.9,
        "count": 70
      }
    },
    {
      "id": 7,
      "title": "White Gold Plated Princess",
      "price": 9.99,
      "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      "category": "jewelery",
      "image": "https://th.bing.com/th/id/OIP.Ukpbo7nhSqiRN-ejZpyMXgHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
      "rating": {
        "rate": 3,
        "count": 400
      }
    },
    {
      "id": 8,
      "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
      "price": 10.99,
      "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      "category": "jewelery",
      "image": "https://th.bing.com/th/id/OIP.Ukpbo7nhSqiRN-ejZpyMXgHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
      "rating": {
        "rate": 1.9,
        "count": 100
      }
    }
  ];
  document.getElementById('id1').innerHTML = `
  <style>
      #id1 {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 20px;
      }
      .card {
          width: 18rem;
          border: 1px solid #ddd;
          border-radius: 5px;
          overflow: hidden;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
      }
      .card img {
          width: 100%;
          height: auto;
      }
      .card-body {
          padding: 15px;
      }
  </style>
`;

var card = document.getElementById("id1");
var colors = ["red", "green", "blue", "pink", "black", "whitesmoke", "yellow", "orange"];

function fun1() {
  for (i = 0; i < arr.length; i++) {
      card.innerHTML += `
      <section class="popular-places" id="popular" style="text-align: center;">
          <small style="color: blue; font-size: 0.8rem; font-family: Verdana, Geneva, Tahoma, sans-serif;">Popular Places</small>
          <p style="font-weight: 650;">To Travel is to Live...</p>
          <div class="container text-center" style="background-color: ${colors[i % colors.length]};">
              <div class="row">  
                  <div class="col">
                      <div class="card" style="width: 18rem;">
                          <img src="${arr[i].image}" class="card-img-top" alt="..." style="width: 285px; height: 350px;">
                          <div class="card-body">
                              <h5 class="card-title">${arr[i].title}</h5>
                              <a href="#" class="btn btn-primary">See More...</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      `;
  }
}
