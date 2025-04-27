function searchProducts() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const products = document.getElementsByClassName('product');
    let found = false;

    for (let i = 0; i < products.length; i++) {
        let productName = products[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        let productAuthor = products[i].getElementsByTagName('p')[0].innerText.toLowerCase();

        if (productName.includes(input) || productAuthor.includes(input)) {
            products[i].style.display = "block";
            found = true;
        } else {
            products[i].style.display = "none";
        }
    }

    // Check if no products are visible
    let noBookMessage = document.getElementById('no-book-message');
    if (!found) {
        if (!noBookMessage) {
            noBookMessage = document.createElement('div');
            noBookMessage.id = 'no-book-message';
            noBookMessage.innerText = 'No Book Found';
            noBookMessage.style.textAlign = 'center';
            noBookMessage.style.marginTop = '20px';
            noBookMessage.style.fontSize = '18px';
            noBookMessage.style.color = 'red';
            document.getElementById('catalog').appendChild(noBookMessage);
        }
    } else {
        if (noBookMessage) {
            noBookMessage.remove();
        }
    }
}
