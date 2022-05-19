export class Cells {
  constructor(selector, options) {
    this.$el = document.querySelector(selector);
    this.components = options.components ?? [];
  }
}
