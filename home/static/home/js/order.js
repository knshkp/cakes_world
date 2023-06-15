// var pcart = document.querySelector('#pcart');
// var ptotal = document.querySelector('#ptotal');

// function addCake(pid) {
//   var cakeId = '#cak' + pid;
//   var name = document.querySelector(cakeId).innerHTML;
//   var radio='cake'+pid;
//   var pri=document.getElementsByName(radio);
//   var size,price;
//   if(pri[0].checked){
//     price=pri[0].value;
//     size='S';
//   }
//   else if(pri[1].checked){
//     price=pri[1].value;
//     size='M';
//   }
//   else{
//     price=pri[2].value;
//     size='L';
//   }
  
//   var orders=JSON.parse(localStorage.getItem('orders'));
//   var total=localStorage.getItem('total');
//   var cartsize=orders.length();
//   orders[cartsize]=[name,size,price];
//   localStorage.setItem('orders',JSON.stringify([orders]));
//   total=Number(total)+Number(price);
//   localStorage.setItem('total',total);
//   var cart=document.querySelector('#cart');
//   cart.innerHTML=orders.length;
//   pcart.innerHTML += '<li>' + name+' '+ size+': Rs.'+price+ '</li>';
//   ptotal.innerHTML ='Total: Rs.'+total;
// }
// var pcart = document.querySelector('#pcart');
// var ptotal = document.querySelector('#ptotal');

// function addCake(pid) {
//   var cakeId = '#cak' + pid;
//   var name = document.querySelector(cakeId).innerHTML;
//   var radio = 'cake' + pid;
//   var pri = document.getElementsByName(radio);
//   var size, price;
  
//   if (pri[0].checked) {
//     price = pri[0].value;
//     size = 'S';
//   } else if (pri[1].checked) {
//     price = pri[1].value;
//     size = 'M';
//   } else {
//     price = pri[2].value;
//     size = 'L';
//   }
  
//   var orders = JSON.parse(localStorage.getItem('orders'));
//   var total = localStorage.getItem('total');
//   var cartsize = orders.length;
  
//   orders[cartsize] = [name, size, price];
//   localStorage.setItem('orders', JSON.stringify(orders));
  
//   total = Number(total) + Number(price);
//   localStorage.setItem('total', total);
  
//   var cart = document.querySelector('#cart');
//   cart.innerHTML = orders.length;
  
//   pcart.innerHTML += '<li>' + name + ' ' + size + ': Rs.' + price + '</li>';
//   ptotal.innerHTML = 'Total: Rs.' + total;
// }
// function pshoppingcart(){
//   var orders = JSON.parse(localStorage.getItem('orders'));
//   var total = localStorage.getItem('total');
//   var cartSize=orders.length;
//   pcart.innerHTML='';
//   for(let i=0;i<cartSize;i++){
//     <button>X</button>
//     pcart.innerHTML += '<li>' + orders[i][0] + ' ' + orders[i][1] + ': Rs.' + orders[i][2] + '</li>';
//   }
//   ptotal.innerHTML = 'Total: Rs.' + total;

// }
// pshoppingcart();
var pcart = document.querySelector('#pcart');
var ptotal = document.querySelector('#ptotal');

function addCake(pid) {
  var pasId = '#cak' + pid;
  var name = document.querySelector(pasId).innerHTML;
  var radio = 'cake' + pid;
  var pri = document.getElementsByName(radio);
  var size, price;

  if (pri[0].checked) {
    price = pri[0].value;
    size = 'S';
  } else if (pri[1].checked) {
    price = pri[1].value;
    size = 'M';
  } else {
    price = pri[2].value;
    size = 'L';
  }

  var orders = JSON.parse(localStorage.getItem('orders')) || [];
  var total = parseFloat(localStorage.getItem('total')) || 0;

  orders.push([name, size, price]);
  localStorage.setItem('orders', JSON.stringify(orders));

  total += parseFloat(price);
  localStorage.setItem('total', total.toFixed(2));

  var cartSize = orders.length;
  var b = '<div class="del" onclick="removeCake(' + (cartSize - 1) + ')">X</div>';

  pcart.innerHTML += '<li>' + name + ' ' + size + ': Rs.' + price +' '+ b + '</li>';
  ptotal.innerHTML = 'Total: Rs.' + total.toFixed(2);
}

function pshoppingcart() {
  var orders = JSON.parse(localStorage.getItem('orders')) || [];
  var total = parseFloat(localStorage.getItem('total')) || 0;
  var cartSize = orders.length;

  pcart.innerHTML = '';
  for (let i = 0; i < cartSize; i++) {
    var b = '<div class="del" onclick="removeCake(' + i + ')">X</div>';
    pcart.innerHTML += '<li>' + orders[i][0] + ' ' + orders[i][1] + ': Rs.' + orders[i][2] +' '+ b + '</li>';
  }
  ptotal.innerHTML = 'Total: Rs.' + total.toFixed(2);
}

function removeCake(n) {
  var orders = JSON.parse(localStorage.getItem('orders')) || [];
  var total = parseFloat(localStorage.getItem('total')) || 0;

  total -= parseFloat(orders[n][2]);
  orders.splice(n, 1);

  localStorage.setItem('orders', JSON.stringify(orders));
  localStorage.setItem('total', total.toFixed(2));

  pshoppingcart();
}