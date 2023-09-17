import TripInfoPresenter from './presenter/trip-info-presenter.js';
import FiltersPresenter from './presenter/filters-presenter.js';
import PointsPresenter from './presenter/points-presenter.js';

import MockService from './service/mock-service.js';

import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import PointsModel from './model/points-model.js';
import FiltersModel from './model/filters-model.js';

const mockService = new MockService();

const destinationsModel = new DestinationsModel(mockService);
const offersModel = new OffersModel(mockService);
const pointsModel = new PointsModel(mockService);
const filtersModel = new FiltersModel();
const pointsContainer = document.querySelector('.trip-events');

const filtersPresenter = new FiltersPresenter({
  pointsModel,
  filtersModel
});
const tripInfoPresenter = new TripInfoPresenter();
const pointsPresenter = new PointsPresenter({
  container: pointsContainer,
  destinationsModel,
  offersModel,
  pointsModel,
  filtersModel
});

export default class BigTripApp {
  init() {
    filtersPresenter.init();
    tripInfoPresenter.init();
    pointsPresenter.init();
  }
}
