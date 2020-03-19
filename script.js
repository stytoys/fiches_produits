// id html ('products_list')
const product = [{
    //product[0];
    name : "Nike 258",
    color : "color: black",
    size : "size : 38",
    price : "40$",
    image : "./img/basket-1.jpg"
},
{
    //product[1];
    name : "Addidas",
    color : "color: white",
    size : "size : 42",
    price : "35$",
    image : "./img/basket-2.jpg"
},
{
    //product[2];
    name : "Nike",
    color : "color: blue",
    size : "size : 40",
    price : "90$",
    image : "./img/basket-3.jpg"
},
{
    //product[3];
    name : "Puma",
    color : "color: red",
    size : "size : 44",
    price : "50$",
    image : "./img/basket-4.jpg"
},
{
    //product[4];
    name : "Nike Air",
    color : "color: yellow",
    size : "size : 36",
    price : "70$",
    image : "./img/basket-5.jpg"
},];
//console.log(product[3]);

window.onload = function(){
    for (let i = 0; i < product.length; i++) {
        //console.log(product[i]);
        document.getElementById("products_list").innerHTML += 
        `<div class="card">
            <img src="${product[i].image}" class="img-card">
            <div class="content-card">
                <span>${product[i].price}</span>
                <h1>${product[i].name}</h1>
                <p>
                    ${product[i].color}<br>
                    ${product[i].size}
                </p>
            </div>
        </div>`;
    }
}
