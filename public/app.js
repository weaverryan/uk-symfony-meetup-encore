var products = [
    'Sheer Shears',
    'Wool Hauling Basket',
    'After-Shear (Fresh Cut Grass)',
    'After-Shear (Morning Dew)',
    'Shear Comb',
    'Shearly Conditioned'
];

var button = document.querySelector('#button');
var storeEl = document.querySelector('#store');
button.addEventListener('click', function() {
    storeEl.innerHTML = products.join(', ');
});
