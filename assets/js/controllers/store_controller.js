import { Controller } from 'stimulus';
import axios from 'axios';

export default class extends Controller {
    async initialize() {
        const response = await axios.get('/api/products');
        this.products = response.data.products;
    }

    showProducts() {
        this.element.querySelector('#store')
            .innerHTML = this.getProductsString();
    }

    getProductsString() {
        return this.products.join(', ');
    }
}
