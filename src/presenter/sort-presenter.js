import {
  render
} from '../framework/render.js';

import SortingView from '../view/sorting-view.js';
import {SortType, enabledSortType} from '../const';


export default class SortPresenter {
  #container = null;
  #sortTypes = [];
  #currentSortType = SortType.DAY;
  #sortTypesChangeHandler = null;

  constructor({container, sortTypeHandler}) {
    this.#container = container;
    this.#sortTypesChangeHandler = sortTypeHandler;
    this.#sortTypes = Object.values(SortType).map((type) => ({
      type,
      isChecked: (type === this.#currentSortType),
      isDisabled: !enabledSortType[type]
    }));
  }

  init() {
    render(new SortingView({
      items: this.#sortTypes,
      onItemChange: this.#sortTypesChangeHandler
    }), this.#container);
  }
}
