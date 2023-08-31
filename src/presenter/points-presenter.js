import {
  render,
} from '../framework/render.js';
import EventListView from '../view/event-list-view.js';
import EventLisEmptytView from '../view/event-list-empty-view.js';
import SortingView from '../view/sorting-view.js';
import PointPresenter from './point-presenter.js';
import {updateItem} from '../utils.js';

const pointsContainer = document.querySelector('.trip-events');

export default class PointsPresenter {
  #destinationsModel = null;
  #offersModel = null;
  #pointsModel = null;
  #points = [];
  #listComponent = new EventListView();
  #sortingComponent = new SortingView();
  #pointsPresenter = new Map();

  constructor({
    destinationsModel,
    offersModel,
    pointsModel,
  }) {
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#pointsModel = pointsModel;
    this.#points = [...this.#pointsModel.get()];
  }

  init() {
    if (!this.#points.length) {
      this.#renderEmptyList();
      return;
    }

    this.#renderSort();
    this.#renderList();
  }

  #renderSort() {
    render(this.#sortingComponent, pointsContainer);
  }

  #handleDataChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#pointsPresenter.get(updatedPoint.id).init(updatedPoint);
  };

  #renderEmptyList() {
    render(new EventLisEmptytView(), pointsContainer);
  }

  #renderList() {
    render(this.#listComponent, pointsContainer);
    this.#renderPoints();
  }

  #renderPoints() {
    this.#points.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#listComponent.element,
      destinationsModel: this.#destinationsModel,
      offersModel: this.#offersModel,
      onPointChange: this.#handleDataChange
    });

    pointPresenter.init(point);
    this.#pointsPresenter.set(point.id, pointPresenter);
  }
}
