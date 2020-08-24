import { Controller } from 'stimulus';
import axios from 'axios';

export default class extends Controller {
    static get targets() {
        return ['productList']
    }

    async initialize() {
        const response = await axios.get('/api/products');
        this.products = response.data.products;
    }

    showProducts() {
        this.productListTarget
            .innerHTML = this.getProductsString();
    }

    getProductsString() {
        return this.products.join(', ');
    }
}
