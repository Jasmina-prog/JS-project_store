const card = document.querySelector('.card');
const card2 = document.querySelector('.card2');
const container = document.querySelector('.card-container')
const allFilter = document.querySelector('.all');
const electronicFilter = document.querySelector('.electronic');
const womensFilter = document.querySelector('.womens');
const jeweleryFilter = document.querySelector('.jewelery');
const mensFilter = document.querySelector('.mens');

async function storeData(link){
    const response = await fetch(link);
    let data = await response.json();
    console.log(data);
    
    data.forEach((item)=>{
        container.innerHTML += `   
        <div class = "card">
        <img src=" ${item.image}">
        <p> ${item?.title}</p>
        <p> ${item?.price}</p>
        </div>         
        `
    })

    function func(something){
        let filtered = data.filter((item)=>item.category == something);
        container.innerHTML = '';
        filtered.forEach((item)=>{
        container.innerHTML += `   
        <div class = "card">
        <img src=" ${item?.image}">
        <p> ${item?.title}</p>
        <p> ${item?.price}</p>
        </div>         
        `
    })
        
    }
    // func()
  

    electronicFilter.addEventListener('click', ()=>func("electronics"))
    jeweleryFilter.addEventListener('click', ()=>func("jewelery"))
    womensFilter.addEventListener('click', ()=>func("women's clothing"))
    mensFilter.addEventListener('click', ()=>func("men's clothing"))
    allFilter.addEventListener('click', ()=>storeData('https://fakestoreapi.com/products'))
    
    
    
}

storeData('https://fakestoreapi.com/products')



