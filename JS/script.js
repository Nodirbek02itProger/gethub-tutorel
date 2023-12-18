let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('.body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click',()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click',()=>{
    body.classList.remove('active');
})
let  products =[
    {
    id:1,
    name:'PHONE',
    imges:'1.jfif',
    price:12000
},
{
    id:2,
    name:'NOUTBOOK',
    imges:'2.jfif',
    price:130000
},
{
    id:3,
    name:'PRODUCT NAME 3',
    imges:'3.jfif',
    price:220000
},
{
    id:4,
    name:'PRODUCT NAME 4',
    imges:'4.jfif',
    price:125000
},
{
    id:5,
    name:'NOUSHNIK',
    imges:'5.jfif',
    price:150000
},
{
    id:6,
    name:'TV',
    imges:'6.jfif',
    price:160000
},
];
let listCatds =[];
function initApp(){
products.forEach((value,key)=>{
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML=`
    <img src="imges/${value.imges}"/>
    <div class="title">${value.name}</div>
    <div class="price">${value.price.toLocaleString()}</div>
    <button onclick="addCard(${key})">Add To Card</button>
    `;
    list.appendChild(newDiv);
})
}
initApp();
function addTaCard(key){
    if(listCatds[key]==null){
        listCatds[key] = products[key];
        listCatds[key].quantity =1;
    }
    reloadCard();
}
function reloadCard(){
    listCatd.innerHTML ='';
    let couts = 0;
    let totalPrice = 0;
    listCatds.forEach((value,key)=>{
        totalPrice = totalPrice + value.price;
        couts = couts + value.quantity;
        if(value!=null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML=`
                <div><img src="imges/${value.imges}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString}</div>
                <div>
                    <button onclick="chngeQuantity(${key},${value.quantity -1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="chngeQuantity(${key},${value.quantity -1})">+</button>
                </div>
            `;
            listCatd.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = cout;
}
function chngeQuantity(key,quantity){
    if(quantity == 0){
        delete listCatds[key];
    }else{
        listCatds[key].quantity = quantity;
        listCatds[key].price = quantity * products[key].price;
    }
    reloadCard();
}






