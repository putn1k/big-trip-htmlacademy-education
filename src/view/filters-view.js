import AbstractView from '../framework/view/abstract-view.js';

import {
  createFiltersTemplate
} from '../templates/filters-template';

export default class FiltersView extends AbstractView {

  get template() {
    return createFiltersTemplate();
  }
}
