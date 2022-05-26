export class TableSelection {
  static selectedClass = 'selected'

  constructor() {
    this.group = [];
    this.$current = null;
  }

  select($el) {
    this.clearGroup();
    this.group.push($el);
    $el.addClass(TableSelection.selectedClass);
    this.$current = $el;
  }

  selectGroup($cells = []) {
    this.clearGroup();
    this.group = $cells;
    this.group.forEach(($el) => $el.addClass(TableSelection.selectedClass));
  }

  clearGroup() {
    this.group.forEach(($el) => $el.removeClass(TableSelection.selectedClass));
    this.group = [];
  }
}
