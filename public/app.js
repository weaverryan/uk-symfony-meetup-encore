import Store from './store';
import './styles.css';

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
