const products = JSON.parse(localStorage.getItem('products')) || [];

const sectionDetail = document.getElementById('product-detail')

function renderProductDetail( ) {
    const idx = obtenerQueryParamId();
    const prod = products[idx]
    sectionDetail.innerHTML = `<h1 class="lead-1 text-primary border-bottom border-warning">${prod.name}</h1>
    <div class="row">
        <div class="col-6">
            <img src="${prod.image}" class="w-100" alt="">
        </div>
        <div class="col-6">
            <h2>DESCRIPCIÓN</h2>
            <p>${prod.description}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident ab veritatis, consequatur corrupti hic placeat quae omnis ipsa laborum. Illum labore nemo est natus laborum, delectus aliquid enim suscipit.</p>


            <h2>$ ${prod.price}</h2>

            <a href=""></a>
        </div>
    </div>`
}
function obtenerQueryParamId() {
    console.log(window.location.search);
    const params = window.location.search;
    console.log(params.split('=')[1].split('&')[0]);

    const paramsUrl = new URLSearchParams(params)   
    const paramsEntries = Object.fromEntries(paramsUrl)
    const index = paramsEntries.id
    return index
    // const id = params.split
}
renderProductDetail();