import {
  createElement
} from '../render.js';

import {
  createPointEditorTemplate
} from '../templates/point-editor-template.js';

export default class PointEditorView {
  getTemplate() {
    return createPointEditorTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
