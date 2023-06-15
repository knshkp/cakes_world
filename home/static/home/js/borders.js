var bcart = document.querySelector('#bcart');
var btotal = document.querySelector('#btotal');

function addPastry(pid) {
  var pasId = '#pas' + pid;
  var name = document.querySelector(pasId).innerHTML;
  var radio = 'pastry' + pid;
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
  var b = '<div class="del" onclick="removePastry(' + (cartSize - 1) + ')">X</div>';

  bcart.innerHTML += '<li>' + name + ' ' + size + ': Rs.' + price + b + '</li>';
  btotal.innerHTML = 'Total: Rs.' + total.toFixed(2);
}

function bshoppingcart() {
  var orders = JSON.parse(localStorage.getItem('orders')) || [];
  var total = parseFloat(localStorage.getItem('total')) || 0;
  var cartSize = orders.length;

  bcart.innerHTML = '';
  for (let i = 0; i < cartSize; i++) {
    var b = '<div class="del" onclick="removePastry(' + i + ')">X</div>';
    bcart.innerHTML += '<li>' + orders[i][0] + ' ' + orders[i][1] + ': Rs.' + orders[i][2] + b + '</li>';
  }
  btotal.innerHTML = 'Total: Rs.' + total.toFixed(2);
}

function removePastry(n) {
  var orders = JSON.parse(localStorage.getItem('orders')) || [];
  var total = parseFloat(localStorage.getItem('total')) || 0;

  total -= parseFloat(orders[n][2]);
  orders.splice(n, 1);

  localStorage.setItem('orders', JSON.stringify(orders));
  localStorage.setItem('total', total.toFixed(2));

  bshoppingcart();
}
