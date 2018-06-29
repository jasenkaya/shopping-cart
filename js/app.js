var products = [
    {product: "Finger Toothbrush", 
    description: "A helping hand to a nicer smile.", 
    price: 1.11,
    source: "https://www.rover.com/blog/wp-content/uploads/2017/11/51BMpuFlm5L.jpg"}, 
    {product: "Barry Manilow at the Beach", 
    description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", 
    price: 39.57,
    source: "https://media-cdn.mclaren.com/media/images/galleries/Jacarepagua-1978.jpg"}, 
    {product: "Ramen Oreos", 
    description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", 
    price: 8.88,
    source: "https://i.ytimg.com/vi/PcVlDKzo954/hqdefault.jpg"}, 
    {product: "Woof Washer 360", 
    description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , 
    price: 9.29,
    source: "http://cloud.millenniumpost.in/39204/39204.jpg"}, 
    {product: "Sauna Pants", 
    description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", 
    price: 2.33,
    source: "http://www.tonycooke.org/wp-content/uploads/2015/05/pants-on-fire.jpg"}, 
    {product: "Hug Me Pillow", 
    description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", 
    price: 599.99,
    source: "https://img.etsystatic.com/il/aa68bd/1104073532/il_340x270.1104073532_l3ho.jpg?version=0"}]

console.log(products[1].product)

var countProducts = products.length
var sumcost = 0
var prodBox=[]
var descBox=[]
var costBox=[]
var imgBox=[]


for(i=0; i<countProducts; i++){
    prodBox[i] = document.createElement('div');
    prodBox[i].className = 'items';
    prodBox[i].innerHTML = products[i].product;
    allItems.appendChild(prodBox[i]); 
    //prodBox[i].addEventListener('click', hideshow)

}

var findProd = document.getElementsByClassName('items')
console.log(findProd)

for (i=0; i<countProducts; i++){
    findProd[i].addEventListener('click',showdesc)
}

for(i=0; i<countProducts; i++){ 
    costBox[i] = document.createElement('span');
    costBox[i].className = 'cost';
    costBox[i].innerHTML = products[i].price;
    findProd[i].appendChild(costBox[i]);

   }

for(i=0; i<countProducts; i++){ 
    descBox[i] = document.createElement('div');
    descBox[i].className = 'desc';
    descBox[i].innerHTML = products[i].description;
    findProd[i].appendChild(descBox[i]);

   }
   
   for(i=0; i<countProducts; i++){ 
    sumcost = sumcost - - products[i].price
   }
   totalCost.innerHTML = sumcost

   function showdesc(){
    var getdesc = this.querySelectorAll('.desc')[0];
    // console.log("hello")
    if(getdesc.style.display ==='block'){
        getdesc.style.display='none'
    }else{
        getdesc.style.display='block';
    }
    }

var findProd = document.getElementsByClassName('items')
for(i=0; i<countProducts; i++){
    console.log("hello asshole")
    imgBox[i] = document.createElement('img');
    imgBox[i].setAttribute("src", products[i].source);
    imgBox[i].className='images';
    imgBox[i].setAttribute("alt", "item photo");
    findProd[i].appendChild(imgBox[i]);
}










// ///---------working code-------
// var products = [
//     {product: "Finger Toothbrush", 
//     description: "A helping hand to a nicer smile.", 
//     price: 1.11}, 
//     {product: "Barry Manilow's Greatest Hits Collection Vol 1", 
//     description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", 
//     price: 39.57}, 
//     {product: "Ramen Oreos", 
//     description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", 
//     price: 8.88}, 
//     {product: "Woof Washer 360", 
//     description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , 
//     price: 9.29}, 
//     {product: "Sauna Pants", 
//     description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", 
//     price: 2.33}, 
//     {product: "Hug Me Pillow", 
//     description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", 
//     price: 599.99}]

// console.log(products[1].product)

// var countProducts = products.length
// var sumcost = 0
// var prodBox=[]
// var descBox=[]
// var costBox=[]
// var imgBox=[]

// // for(i=0; i<countProducts; i++){
// //     prodBox[i] = document.createElement('img src');
// //     prodBox[i].className = 'img';
// //     prodBox[i].innerHTML = products[i].product;
// //     allItems.appendChild(prodBox[i]); 
// //     //prodBox[i].addEventListener('click', hideshow)
// // }

// for(i=0; i<countProducts; i++){
//     imgBox[i] = document.createElement('img');
//     imgBox[i].setAttribute("src", "https://i.vimeocdn.com/portrait/12630669_300x300");
//     imgBox[i].className='images';
//     // imgBox[i].setAttribute("width", "30");
//     // imgBox[i].setAttribute("height", "22");
//     imgBox[i].setAttribute("alt", "item photo");
//     allItems.appendChild(imgBox[i]);
// }


// for(i=0; i<countProducts; i++){
//     prodBox[i] = document.createElement('div');
//     prodBox[i].className = 'items';
//     prodBox[i].innerHTML = products[i].product;
//     allItems.appendChild(prodBox[i]); 
//     //prodBox[i].addEventListener('click', hideshow)

// }

// var findProd = document.getElementsByClassName('items')
// console.log(findProd)

// for (i=0; i<countProducts; i++){
//     findProd[i].addEventListener('click',showdesc)
// }

// for(i=0; i<countProducts; i++){ 
//     costBox[i] = document.createElement('span');
//     costBox[i].className = 'cost';
//     costBox[i].innerHTML = products[i].price;
//     findProd[i].appendChild(costBox[i]);

//    }

// for(i=0; i<countProducts; i++){ 
//     descBox[i] = document.createElement('div');
//     descBox[i].className = 'desc';
//     descBox[i].innerHTML = products[i].description;
//     findProd[i].appendChild(descBox[i]);

//    }
   
//    for(i=0; i<countProducts; i++){ 
//     sumcost = sumcost - - products[i].price
//    }
//    totalCost.innerHTML = sumcost

//    function showdesc(){
//     var getdesc = this.querySelectorAll('.desc')[0];
//     // console.log("hello")
//     if(getdesc.style.display ==='block'){
//         getdesc.style.display='none'
//     }else{
//         getdesc.style.display='block';
//     }
// }