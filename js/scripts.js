var price, item_price;
$(".submit").click(function() {

    alert("item added to cart");

});

var addItemId = 0;

var addItemId = 0;
function addToCart (item) {
    addItemId += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id',addItemId);
    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].currentSrc);
    var title = document.createElement('div')
    title.innerText = item.children[1].innerText;
    var delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.setAttribute('onclick', 'del(' + addItemId + ')');
    var cartItems = document.getElementById('title');
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(delBtn);
    cartItems.append(selectedItem);
}


function del(item) {
    document.getElementById(item).remove();
}
var item_price = price;
switch (item_price) {
    case "0":
        price = 0;
        break;
    case "item1":
        price = 5000;
        console.log(price);
        break;
    case "item2":
        price = 850;
        console.log(price);
        break;
    case "item3":
        price = 3000;
        console.log(price);
    case "item4":
        price = 4500;
        console.log(price);
    case "item5":
        price = 600;
        console.log(price);
    case "item6":
        price = 600;
        console.log(price);
    case "item7":
        price = 600;
        console.log(price);
    case "item8":
        price = 600;
        console.log(price);
    case "item9":
        price = 600;
        console.log(price);
    case "item10":
        price = 600;
        console.log(price);
    case "item11":
        price = 600;
        console.log(price);
    case "item12":
        price = 600;
        console.log(price);

    default:

        console.log("no price");
}



$("button#form").click(function(event) {
    event.preventDefault();


    let person = $("input#name").val();
    let phone = $("input#phone").val();
    let location = $("input#location").val();

    if ($("input#name").val() && $("input#phone").val() && $("input#location").val() != "") {

        $("#finallmessage").append(person + ", Your order will be delivered at " + location + ", in 3hrs");
        alert("your order will be delivered in 3hours");


    } else {
        alert("Please fill in the details for delivery!");

        $("button#final-order").show();
    }

    function newFunction() {
        $("#form").reset();
        alert("your order will be delivered in 3hours");
    }

});
