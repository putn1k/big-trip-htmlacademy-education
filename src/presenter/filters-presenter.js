import {
  render
} from '../framework/render.js';

import FiltersView from '../view/filters-view.js';
import {filter} from '../utils';
import {UpdateType} from '../const';

export default class FiltersPresenter {
  #container = document.querySelector('.trip-controls__filters');
  #pointsModel = null;
  #filtersModel = null;
  #filters = [];

  constructor({pointsModel, filtersModel}) {
    this.#pointsModel = pointsModel;
    this.#filtersModel = filtersModel;

    this.#filters = Object.entries(filter)
      .map(([filterType, filterPoints], index) => ({
        type: filterType,
        isChecked: index === 0,
        isDisabled: filterPoints(this.#pointsModel.get()).length === 0
      }));
  }

  init() {
    render(new FiltersView({
      items: this.#filters,
      onItemChange: this.#filterTypesChangeHandler
    }), this.#container);
  }

  #filterTypesChangeHandler = (filterType) => {
    this.#filtersModel.set(UpdateType.MAJOR, filterType);
  };
}
