import '../styles/styles.scss';
import sheep from '../images/sheep.png';

const h1 = document.querySelector('h1');
h1.innerHTML = `<img src="${sheep}" alt="baa" height="30">` + h1.innerHTML;
