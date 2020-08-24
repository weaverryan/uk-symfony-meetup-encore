import Store from './store';
import './styles.scss';
import sheep from './sheep.png';

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

const h1 = document.querySelector('h1');
h1.innerHTML = `<img src="${sheep}" alt="baa" height="30">` + h1.innerHTML;
