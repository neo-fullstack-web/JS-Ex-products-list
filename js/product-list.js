import { Products } from './products.js';

const tableBodyHTML = document.getElementById('table-body');
console.log(tableBodyHTML)

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

