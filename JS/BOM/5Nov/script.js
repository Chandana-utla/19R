
const images1=[
    'url("https://th.bing.com/th/id/OIP.EvVFjuuijHsWcukkm6Tv3QHaFj?w=247&h=185&c=7&r=0&o=5&dpr=1.4&pid=1.7)',
    'url("https://th.bing.com/th/id/OIP.ghSK0xbEX9ctKv05R5t4_QHaE1?w=245&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7)',
    'url("https://th.bing.com/th/id/OIP.anCZOs_WKuujF8h8B39ZBgHaFe?w=238&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7")'
    
]

// const images = [
// "bg1","bg2","bg3",
// "bg4","bg5"   
// ];

function changeBgPic() {
    

    const randomIndex = Math.floor(Math.random() * images1.length);
    // document.body.classList.remove(...images);
    // document.body.classList.add(images[randomIndex])
    document.body.style.backgroundImage=(images1[randomIndex])
}
