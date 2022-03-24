$(".submit").click(function() {

    alert("item added to cart");

});
<<<<<<< HEAD
=======
var addItemId = 0;

function addToCart(item) {
    addItemId += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', addItemId);
    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].currentSrc);
    var cartItems = document.getElementById('title');
    selectedItem.append(img);
    cartItems.append(selectedItem);
}
>>>>>>> c40fe57a36ba657068416179256bf97727b1d31b
