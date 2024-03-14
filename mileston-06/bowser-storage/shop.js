const addProduct = () => {
    const productField = document.getElementById('product-name')
    const quantityField = document.getElementById('product-quantity')

    const product = productField.value;
    const quantity = quantityField.value;

    productField.value = "";
    quantityField.value = "";

    displayProduct(product, quantity)
}


// page e display korchi and local storage e set korchi :->
const displayProduct = (product, quantity) => {
    const productContainer = document.getElementById('product-container')
    const li = document.createElement('li')
    li.innerHTML = `${product}: ${quantity} `
    productContainer.appendChild(li)

    saveProductToLocalStorage(product, quantity)
}

// const getStoredShoppingCart = () => {
//     const storedCart = localStorage.getItem('cart')
//     let cart = {}
//     if (storedCart) {
//         cart = JSON.parse(storedCart)
//     }
//     return cart;
// }

// const saveProductToLocalStorage = (product, quantity) => {
//     const cart = getStoredShoppingCart();
//     cart[product] = quantity
//     const cartStr = JSON.stringify(cart)
//     localStorage.setItem('cart', cartStr)
// }

// function displayProductsFromLocalStoraage(){
//     const saveCart = getStoredShoppingCart()   
//     console.log(saveCart)
//     for (const product in saveCart) {
//         const quantity = saveCart[product]
//         displayProduct(product,quantity)
//     }
// }
// displayProductsFromLocalStoraage()

function getStoredShoppingCart() {
    const storedCart = localStorage.getItem('cart')
    let cart = {}
    if (storedCart) {
        cart = JSON.parse(storedCart)
    }
    return cart
}

function saveProductToLocalStorage(product, quantity) {
    const cart = getStoredShoppingCart()
    cart[product] = quantity;
    const cartStringify = JSON.stringify(cart)
    localStorage.setItem('cart',cartStringify)
}