import '../styles/styles.scss';
import sheep from '../images/sheep.png';
import axios from 'axios';
import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'

/* STIMULUS SETUP */
const application = Application.start()
const context = require.context('./controllers', true, /\.js$/)
application.load(definitionsFromContext(context))
/* END STIMULUS SETUP */

const storeEl = document.querySelector('#store');
if (storeEl) {
    import('./components/store').then(Store => {
        async function startStoreApp() {
            const response = await axios.get('/api/products');
            const products = response.data.products;

            const store = new Store.default(storeEl, products);
            store.initialize();
        }

        startStoreApp();
    });
}

const h1 = document.querySelector('h1');
h1.innerHTML = `<img src="${sheep}" alt="baa" height="30">` + h1.innerHTML;
