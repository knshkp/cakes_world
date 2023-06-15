var name=document.querySelector('#names');
var price=document.querySelector('#price');
var size=document.querySelector('#size');
var bill=document.querySelector('#total');
var rm=document.querySelector('#rm');
function shoppingcart() {
    var orders = JSON.parse(localStorage.getItem('orders')) || [];
    var total = parseFloat(localStorage.getItem('total')) || 0;
    var cartSize = orders.length;
    names.innerHTML='<h3>Name</h3>';
    price.innerHTML="<h3>Price<h3>";
    size.innerHTML="<h3>Size</h3>";
    rm.innerHTML="<h3><br></h3>";
    for (let i = 0; i < cartSize; i++) {
       rm.innerHTML += '<h4><button class="btn-danger" onclick="removeItem(' + i + ')">X</button></h4>';
       names.innerHTML+='<h4>'+orders[i][0]+'</h4>';
       size.innerHTML+='<h4>'+orders[i][1]+'</h4>';
       price.innerHTML+='<h4>'+orders[i][2]+'</h4>';
    }
    bill.innerHTML = 'Total: Rs.' + total.toFixed(2);
}
shoppingcart();
function removeItem(n) {
    var orders = JSON.parse(localStorage.getItem('orders')) || [];
    var total = parseFloat(localStorage.getItem('total')) || 0;
  
    total -= parseFloat(orders[n][2]);
    orders.splice(n, 1);
  
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('total', total.toFixed(2));
  
    shoppingcart();
}
var note = document.querySelector('#message');

function order() {
    var msg = note.value;
    var url = '/home/order';
    var orders = JSON.parse(localStorage.getItem('orders')) || [];

    var orderData = {
        orders: orders,
        note: msg
    };

    axios.post(url, orderData)
        .then(function(response) {
            window.location.replace('/home/success');
            localStorage.setItem('orders',JSON.stringify([]));
            localStorage.setItem('total',0);
        })
        .catch(function(error) {
            console.log("An error occurred:", error);
        });
}
