import {
  render,
  RenderPosition
} from './framework/render.js';
import TripInfoView from './view/trip-info-view.js';
import PointsPresenter from './presenter/points-presenter.js';
import FiltersPresenter from './presenter/filters-presenter.js';
import MockService from './service/mock-service.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import PointsModel from './model/points-model.js';

const pointsContainer = document.querySelector('.trip-events');
const tripMainContainer = document.querySelector('.trip-main');
const mockService = new MockService();

const destinationsModel = new DestinationsModel(mockService);
const offersModel = new OffersModel(mockService);
const pointsModel = new PointsModel(mockService);

const pointsPresenter = new PointsPresenter({
  pointsContainer,
  destinationsModel,
  offersModel,
  pointsModel
});

const filtersPresenter = new FiltersPresenter();

render(new TripInfoView(), tripMainContainer, RenderPosition.AFTERBEGIN);


pointsPresenter.init();
filtersPresenter.init();
