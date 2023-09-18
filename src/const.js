const CITIES = ['Paris', 'London', 'Chicago', 'Tokio', 'New York', 'Moscow', 'Amsterdam', 'San-Francisco'];
const DESCRIPTION = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt architecto labore atque!';
const EVENT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past'
};
const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFER: 'offer',
};
const EmptyListMessage = {
  EVERYTHING : 'Click New Event to create your first point',
  FUTURE : 'There are no future events now',
  PRESENT : 'There are no present events now',
  PAST : 'There are no past events now',
};

const enabledSortType = {
  [SortType.DAY]: true,
  [SortType.EVENT]: false,
  [SortType.TIME]: true,
  [SortType.PRICE]: true,
  [SortType.OFFER]: false,
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  DELETE_POINT: 'DELETE_POINT',
  CREATE_POINT: 'CREATE_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
};

const Counts = {
  DESTINATIONS: 10,
  DESCRIPTION_PHOTO: 4,
  OFFERS: 7,
  POINTS: 5,
};
const Price = {
  MIN: 1,
  MAX: 500
};
const Duration = {
  HOUR: 5,
  DAY: 3,
  MINUTE: 59
};
const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

const EditType = {
  EDITING: 'EDITING',
  CREATING: 'CREATING',
};

const POINT_EMPTY = {
  basePrice: 0,
  dateFrom: null,
  dateTo: null,
  destination: null,
  isFavorite: false,
  offers: [],
  type: EVENT_TYPES[5],
};

export {
  CITIES,
  DESCRIPTION,
  EVENT_TYPES,
  FilterType,
  SortType,
  EmptyListMessage,
  enabledSortType,
  Counts,
  Price,
  Duration,
  Mode,
  UserAction,
  UpdateType,
  EditType,
  POINT_EMPTY
};
