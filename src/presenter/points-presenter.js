import {
  render
} from '../render.js';
import EventListView from '../view/event-list-view.js';
import PointView from '../view/point-view.js';
import PointEditorView from '../view/point-editor-view.js';
import SortingView from '../view/sorting-view.js';

export default class PointsPresenter {
  listComponent = new EventListView();
  sortingComponent = new SortingView();

  constructor({
    tripEventsContainer,
    pointsModel,
    offersModel,
    destinationsModel
  }) {
    this.tripEventsContainer = tripEventsContainer;
    this.pointsModel = pointsModel;
    this.destinationsModel = destinationsModel;
    this.offersModel = offersModel;
  }

  init() {
    this.points = [...this.pointsModel.getPoints()];
    render(this.sortingComponent, this.tripEventsContainer);
    render(this.listComponent, this.tripEventsContainer);
    render(new PointEditorView(), this.listComponent.getElement());

    this.points.forEach((point) => {
      render(new PointView({
        point,
        pointDestination: this.destinationsModel.getById(point.destination),
        pointOffers: this.offersModel.getByType(point.type)
      }), this.listComponent.getElement());
    });
  }
}
