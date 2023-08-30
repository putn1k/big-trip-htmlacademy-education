import {
  render,
  replace
} from '../framework/render.js';
import PointView from '../view/point-view.js';
import PointEditorView from '../view/point-editor-view.js';

export default class PointPresenter {
  #pointListContainer = null;
  #pointComponent = null;
  #pointEditComponent = null;
  #point = null;

  #destinationsModel = null;
  #offersModel = null;

  constructor({
    pointListContainer,
    destinationsModel,
    offersModel
  }) {
    this.#pointListContainer = pointListContainer;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
  }

  init(point) {
    this.#point = point;

    this.#pointComponent = new PointView({
      point: this.#point,
      pointDestination: this.#destinationsModel.getById(point.destination),
      pointOffers: this.#offersModel.getByType(point.type),
      onEditClick: this.#pointEditHandler
    });
    this.#pointEditComponent = new PointEditorView({
      point: this.#point,
      pointDestination: this.#destinationsModel.getById(point.destination),
      pointOffers: this.#offersModel.getByType(point.type),
      onCloseClick: this.#pointCloseHandler,
      onSubmitForm: this.#pointSubmitHandler
    });

    render(this.#pointComponent, this.#pointListContainer);
  }

  #replacePointToEditor() {
    replace(this.#pointEditComponent, this.#pointComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #replaceEditorToPoint() {
    replace(this.#pointComponent, this.#pointEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceEditorToPoint();
    }
  };

  #pointEditHandler = () => {
    this.#replacePointToEditor();
  };

  #pointSubmitHandler = () => {
    this.#replaceEditorToPoint();
  };

  #pointCloseHandler = () => {
    this.#replaceEditorToPoint();
  };
}
