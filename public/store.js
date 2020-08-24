export default class {
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
