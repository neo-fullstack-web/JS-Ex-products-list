// Voy a mirar si en el local storage hay productos guardados. Si hay los voy a leer y los voy asignar a mi variable Productos
const Products =  JSON.parse(localStorage.getItem('products'))      ;
const tableBodyHTML = document.getElementById('table-body');
const addProductForm = document.querySelector('#addProductForm');


console.log(tableBodyHTML)

function renderProducts() {
    tableBodyHTML.innerHTML = '';
    Products.forEach(elem => {
        tableBodyHTML.innerHTML += `<tr>
                                        <td>
                                            <img class="table-img" src=${elem.image} />
                                        </td>
                                        <td>${elem.name}</td>
                                        <td>${elem.description}</td>
                                        <td>$ ${elem.price}</td>
                                        <td>icono</td>
                                    </tr>`
    });
}

renderProducts();


addProductForm.addEventListener('submit', (evt) => {

    if(addProductForm.checkValidity() === false) {
        // Freno la ejecución de la funcion de callback del evento submit
        return;
    }


    evt.preventDefault();
    console.dir(evt.target.elements);
    // const formEl = evt.target.elements;

    // let newProduct = {
    //     name: formEl.name.value,
    //     description: formEl.description.value,
    //     price: formEl.price.valueAsNumber,
    //     image: formEl.image.value,
    //     stock: formEl.stock.checked,
    //     jostick: formEl.jostick.checked
    // }

    const formData = new FormData(addProductForm);
    const newProduct = Object.fromEntries(formData)

    newProduct.price = parseInt(newProduct.price)

    
    if(newProduct.jostick) newProduct.jostick = true
    if(newProduct.stock) newProduct.stock = true;

    //Añadí un nuevo producto a mi array de productos
    Products.push(newProduct)


    console.log(Products)
    //Guardamos el array de productos modificado
    localStorage.setItem('products', JSON.stringify(Products))



    // Pintamos nuevamente la tabla para que reflejen los cambios
    renderProducts();

    // Reseteo el formulario para que esta listo para una carga
    addProductForm.reset()

    // Busco el input del nombre del producto
    const nameInput = document.getElementById('name')
    // le hago focus (pongo el curso en ese input)
    nameInput.focus();
    

})




