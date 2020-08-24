import { Controller } from 'stimulus';
import axios from 'axios';
import Store from '../components/store';

export default class extends Controller {
    async initialize() {
        const response = await axios.get('/api/products');
        const products = response.data.products;

        const store = new Store(this.element, products);
        store.initialize();
    }
}
