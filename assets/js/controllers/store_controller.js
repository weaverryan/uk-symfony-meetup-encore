import { Controller } from 'stimulus';

export default class extends Controller {
    initialize() {
        console.log(this.element);
    }
}
