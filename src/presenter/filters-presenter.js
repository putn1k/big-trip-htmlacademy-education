import {
  render
} from '../framework/render.js';

import FiltersView from '../view/filters-view.js';
import {filter} from '../utils';

const filtersContainer = document.querySelector('.trip-controls__filters');

export default class FiltersPresenter {
  #pointsModel = null;
  #filters = [];

  constructor({pointsModel}) {
    this.#pointsModel = pointsModel;

    this.#filters = Object.entries(filter)
      .map(([filterType, filterPoints], index) => ({
        type: filterType,
        isChecked: index === 0,
        isDisabled: filterPoints(this.#pointsModel.get()).length === 0
      }));
  }

  init() {
    render(new FiltersView({
      items: this.#filters
    }), filtersContainer);
  }
}
