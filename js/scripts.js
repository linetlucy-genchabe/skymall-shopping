
$(".submit").click(function () {

    alert("item added to cart");

});
var addItemId = 0;
function addToCart (item) {
    addItemId += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id',addItemId);
    var img = document.createElement('img');
    img.setAttribute('src',item.children[0].currentSrc);
    var title = document.createElement('div')
    title.innerText = item.children[1].innerText;
    var delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.setAttribute('onclick','del('+addItemId+')');
    var cartItems = document.getElementById('title');
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(delBtn);
    cartItems.append(selectedItem);
}
function del(item){
    document.getElementById(item).remove();
}



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


