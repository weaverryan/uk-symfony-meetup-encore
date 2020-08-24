import { Controller } from 'stimulus';
import $ from 'jquery';

export default class extends Controller {
    initialize() {
        const $commentText = $(this.element).find('.js-comment-text');
        $(this.element).find('.js-btn-make-louder').on('click', () => {
            $commentText.html($commentText.html().toUpperCase());
        })
    }
}
