// Obtengo mi array de productos del localstorage
const products = JSON.parse(localStorage.getItem('products')) || [];

// Obtengo el elemento donde voy a renderizar mi producto
const sectionDetail = document.getElementById('product-detail')

// Renderizo producto en la función definida
function renderProductDetail( ) {
    // Debo saber que producto voy a renderizar por eso analizo la URL
    const idx = obtenerQueryParamId();
    //Obtengo el producto
    const prod = products[idx];
    // Datos a agregar si así lo quisiera
    const precioFinanciado = Math.round((prod.price * 1.50) / 12)

    //Inserto el HTML con la estructura definida previamente pero renderizando dinámicamente ciertos contedidos de algunos elementos
    sectionDetail.innerHTML = `
    <h1 class="lead-1 text-primary border-bottom border-warning">${prod.name}</h1>
    <div class="row">
        <div class="col-12">
            <img src="${prod.image}" class="w-100" alt="">
        </div>
        <div class="col-6">
            <h2>DESCRIPCIÓN</h2>
            <p>${prod.description}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident ab veritatis, consequatur corrupti hic placeat quae omnis ipsa laborum. Illum labore nemo est natus laborum, delectus aliquid enim suscipit.</p>
            <h2>$ ${prod.price}</h2>
            <h2>Precio financiado $ ${ precioFinanciado }</h2>
            <a href=""></a>
        </div>
    </div>`
}
function obtenerQueryParamId() {
   // Obtengo la parte de busqueda
    const params = window.location.search;

    // Analizo esa parte obtenida y la tranformo a un objeto
    const paramsUrl = new URLSearchParams(params)   
    const paramsEntries = Object.fromEntries(paramsUrl)

    // Obtengo el id especificamente
    const index = paramsEntries.id
    // Lo retorno para que se almacene como resultado de mi funcion en la variable donde lo llamo
    return index
    // const id = params.split
}
renderProductDetail();