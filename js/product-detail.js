const products = JSON.parse(localStorage.getItem('products'));
let params = new URLSearchParams(window.location.search)
const productDetailContainer = document.getElementById('product-detail-container')


console.log(params)

params = Object.fromEntries(params);

console.log(params)

const id = params.id;

function findProduct() {
    const product = products.find((prod, idx) => idx === +id);
    if(product) renderProductDescription(product)
}

findProduct()

function renderProductDescription(product) {
    console.log(product)
    productDetailContainer.innerHTML = `
        <div class="row card-container" id="product-detail-container"> 
            <div class="col-12 col-md-6 ">
            <img src="${product.image}" alt="" class="w-100">
            </div>
            <div class="col-12 col-md-6 ">
                <h1 class="text-dark border-bottom border-danger">${product.name}</h1>
                <p class="text-secondary">${product.description}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum amet culpa sint cumque temporibus ipsam eveniet aperiam illo cupiditate! Accusamus vitae ipsum non harum nemo sunt magni atque, nihil tenetur?</p>
                <h3 class="text-primary">$ ${product.price}</h3>

                <button class="btn btn-primary">Comprar</button>
            </div>
        </div>`
}