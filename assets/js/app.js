import '../styles/styles.scss';
import sheep from '../images/sheep.png';
import { Application } from 'stimulus'
import { definitionsFromContext } from 'stimulus/webpack-helpers'

/* STIMULUS SETUP */
const application = Application.start()
const context = require.context('./controllers', true, /\.js$/)
application.load(definitionsFromContext(context))
/* END STIMULUS SETUP */

const h1 = document.querySelector('h1');
h1.innerHTML = `<img src="${sheep}" alt="baa" height="30">` + h1.innerHTML;
