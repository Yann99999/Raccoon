var products_list = [
  {
    "id": "35",
    "name": "Miniatura Homem de Ferro",
    "price": "R$ 50,25"
  },
  {
    "id": "30",
    "name": "Miniatura Magneto",
    "price": "R$ 57,99"
  },{
    "id": "25",
    "name": "Miniatura Super Homem",
    "price": "R$ 37,51"
  },{
    "id": "71",
    "name": "Miniatura Bernard",
    "price": "R$ 71.10"
  },{
    "id": "56",
    "name": "Miniatura Batman",
    "price": "R$ 23,00"
  },
  {
    "id": "56",
    "name": "Miniatura Darth Vader",
    "price": "R$ 89,00"
  },
  {
    "id": "102",
    "name": "Miniatura Mestre Miyagi",
    "price": "R$ 1234,56"
  }];

// Array original

var new_products_list = products_list;

new_products_list.forEach(function (e) {  
  e.item_price = e.price;
  delete e.price;
});

new_products_list.map(function(e){ 
  let precoAjustado = e.item_price.replace("R$ ", "").replace(",", ".");
  let precoToNumber = Number.parseFloat(precoAjustado); 
  e.item_price = precoToNumber; 

  return e;
})



