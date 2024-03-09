/* functions */ 
const quey = (element)=>document.querySelector(element);
const all = (elements)=>document.querySelectorAll(elements);
function valorBr(valor) {      
    const formatado = parseInt(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });      
    return formatado;
  
  }

/* manipulação */ 
pizzaJson.map((item, index)=>{
let pizzaItem = quey('.models .pizza-item').cloneNode(true);
pizzaItem.querySelector('.pizza-item--img img').src = item.img;
pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
pizzaItem.querySelector('.pizza-item--price').innerHTML = valorBr(item.price);
pizzaItem.querySelector('a').addEventListener('click', (e)=>{
    e.preventDefault();
    quey('.pizzaWindowArea').style.opacity = 0;
    quey('.pizzaWindowArea').style.display = 'flex';
    setTimeout(()=>{
        quey('.pizzaWindowArea').style.opacity = 1;
    });
})

quey('.pizza-area').append(pizzaItem);
});