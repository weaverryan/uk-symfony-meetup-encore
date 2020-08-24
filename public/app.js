class Store {
    constructor(element, products) {
        this.products = products;
        this.element = element;
    }

    initialize() {
        const button = document.querySelector('#button');
        button.addEventListener('click', () => {
            this.element.innerHTML = this.getProductsString();
        });
    }

    getProductsString() {
        return this.products.join(', ');
    }
}

const storeEl = document.querySelector('#store');
const store = new Store(storeEl, [
    'Sheer Shears',
    'Wool Hauling Basket',
    'After-Shear (Fresh Cut Grass)',
    'After-Shear (Morning Dew)',
    'Shear Comb',
    'Shearly Conditioned'
]);
store.initialize();
