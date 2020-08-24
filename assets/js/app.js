import '../styles/styles.scss';
import sheep from '../images/sheep.png';
import Store from './components/store';
import axios from 'axios';

const storeEl = document.querySelector('#store');
if (storeEl) {
    async function startStoreApp() {
        const response = await axios.get('/api/products');
        const products = response.data.products;

        const store = new Store(storeEl, products);
        store.initialize();
    }

    startStoreApp();
}

const h1 = document.querySelector('h1');
h1.innerHTML = `<img src="${sheep}" alt="baa" height="30">` + h1.innerHTML;
