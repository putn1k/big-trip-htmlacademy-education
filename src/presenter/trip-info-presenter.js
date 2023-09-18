import {
  render,
  RenderPosition
} from '../framework/render.js';

import TripInfoView from '../view/trip-info-view.js';

export default class TripInfoPresenter {
  #container = null;
  #tripInfoComponent = null;
  constructor({container}) {
    this.#container = container;
    this.#tripInfoComponent = new TripInfoView();
  }

  init() {
    render(this.#tripInfoComponent, this.#container, RenderPosition.AFTERBEGIN);
  }
}
