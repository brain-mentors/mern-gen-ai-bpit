//alert("I am in Controller");
import {productOperations} from '../services/product-service.js';
window.addEventListener('DOMContentLoaded', bindEvents);

function bindEvents(){
    
document.querySelector("#add").addEventListener("click", add);

}
function readFields(){
    const product = {}; // Object Literal
    const fields =['id', 'name', 'desc', 'price', 'url'];
    for(let field of fields){
        product[field] = document.querySelector(`#${field}`).value;
    }
    
    return product;
    // const id = document.querySelector('#id').value;
    // product.id = id;
    // const name = document.querySelector('#name').value;
    // product.name = name;
}
function add(){
    console.log(" Add Call");
   // read fields from view (UI)
   const product = readFields();
   productOperations.add(product);
   //console.log(product);
}