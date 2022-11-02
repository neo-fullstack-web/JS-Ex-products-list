// Voy a mirar si en el local storage hay productos guardados. Si hay los voy a leer y los voy asignar a mi variable Productos
const Products = JSON.parse(localStorage.getItem('products')) || [];
const tableBodyHTML = document.getElementById('table-body');
const addProductForm = document.querySelector('#addProductForm');
let editable;

console.log(tableBodyHTML)

function renderProducts() {
    tableBodyHTML.innerHTML = '';
    Products.forEach((elem, index) => {
        tableBodyHTML.innerHTML += `
            <tr>
                <td>
                    <img class="table-img" src=${elem.image} />
                </td>
                <td>${elem.name}</td>
                <td>${elem.description}</td>
                <td>$ ${elem.price}</td>
                <td class="">
                    <i class="fa-solid fa-box me-2 ${elem.stock ? `text-primary` : `text-muted`} "></i>
                    ${elem.jostick ? `<i class="fa-solid fa-gamepad me-2"></i>` : ``}
                    <span onclick="setFavorite(${index})">${elem.favorite ? `<i class="fa-solid fa-star text-yellow"></i>` : `<i class="fa-regular fa-star"></i>`} </span>
                </td>
                <td class="">
                    <div class="d-flex">
                        <button class="btn btn-danger p-1 me-2" onclick="deleteProduct(${index})">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                        <button class="btn btn-success p-1" onclick="editProduct(${index})">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                    </div>
                </td>
            </tr>`
    });
}

renderProducts();


addProductForm.addEventListener('submit', (evt) => {

    if (addProductForm.checkValidity() === false) {
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

    console.log(newProduct)

    newProduct.jostick = !!newProduct.jostick;
    newProduct.stock = !!newProduct.stock;

    if(editable) {
        Products[editable] = newProduct;
    } else {
        Products.push(newProduct)
    }

    editable = undefined;

    //Añadí un nuevo producto a mi array de productos
    // if (addProductForm.dataset.edit) {
    //     Products[addProductForm.dataset.edit] = newProduct;
    // } else {
    //     Products.push(newProduct)
    // }

    // delete addProductForm.dataset.edit;


    console.log(Products)
    //Guardamos el array de productos modificado
    // localStorage.setItem('products', JSON.stringify(Products))
    saveLocalProducts()


    // Pintamos nuevamente la tabla para que reflejen los cambios
    renderProducts();

    // Reseteo el formulario para que esta listo para una carga
    addProductForm.reset()

    // Busco el input del nombre del producto
    const nameInput = document.getElementById('name')
    // le hago focus (pongo el curso en ese input)
    nameInput.focus();


})

function deleteProduct(idx) {
    console.log(`delete`)
    Products.splice(idx, 1);
    saveLocalProducts();
    renderProducts();
}

// Function @param indice del elemento a editar
function editProduct(idx) {
    //Obtengo del array productos el producto completo (objeto)
    const productToEdit = Products[idx]

    //Obtengo los inputs elementos de mi formulario
    const formEl = addProductForm.elements

    //Empiezo a rellenar los valor de los inputs con los valores de las propiedas del producto a editar
    formEl.name.value = productToEdit.name;
    formEl.description.value = productToEdit.description;
    formEl.price.value = productToEdit.price;
    formEl.image.value =  productToEdit.image;

    formEl.stock.checked = productToEdit.stock;
    formEl.jostick.checked = productToEdit.checked;


    // addProductForm.setAttribute('edit', idx)
    editable = idx;



    // const prod = Products[idx]
    // Object.keys(prod).forEach(key => {
    //     // if(`checked` in addProductForm.elements[key]) {
    //     console.log(key, !!prod[key])
    //     addProductForm.elements[key].checked = !!prod[key]
    //     // }

    //     addProductForm.elements[key].value = Products[idx][key]
    // })
    // addProductForm.setAttribute('data-edit', idx);

    
}

function setFavorite(indice) {

    Products.forEach((prod) => {
        prod.favorite = false;
    })
    Products[indice].favorite = true;

    renderProducts();
    saveLocalProducts();
}

function saveLocalProducts() {
    localStorage.setItem('products', JSON.stringify(Products))
}