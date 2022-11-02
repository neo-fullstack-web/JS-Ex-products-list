const products = JSON.parse(localStorage.getItem('products')) || [];
const notebookContainer = document.querySelector('#notebook')
// const monitorContainer = document.querySelector('#monitor')
console.log(products)
function renderProducts() {
    const idx = obtenerQueryParamId();
    notebookContainer.innerHTML = '';
    products.forEach((prod, index) => {
        notebookContainer.innerHTML += `
            <div class="col-12 col-md-4 d-flex">
                <div class="card w-100">
                <img src="${prod.image}" class="card-img-top card-image" alt="${prod.name}">
                <div class="card-body">
                    <h5 class="card-title text-primary">${prod.name}</h5>
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

function obtenerQueryParamId() {
    console.log(window.location.pathname)
}

renderProducts()