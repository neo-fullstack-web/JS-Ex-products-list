const cardContainer = document.getElementById('card-container');
const products = JSON.parse(localStorage.getItem('products')) || []

function loadProducts() {
    cardContainer.innerHTML = ``;
    products.forEach((prod, index) => {
        cardContainer.innerHTML += 
            `<div class="col-12 col-md-3 d-flex">
                <div class="card">
                <img src="${prod.image}" class="card-img-top card-image" alt="${prod.name}">
                <div class="card-body flex-grow-1">
                    <h5 class="card-title">${prod.name}</h5>
                    <p class="card-text">${prod.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">$ ${prod.price}</li>
                </ul>
                <div class="card-body text-end">
                    <a href="/pages/product-detail/product-detail.html?id=${index}" class="btn btn-primary">Ver más</a>
                </div>
                </div>
            </div>`
    })
}

loadProducts()