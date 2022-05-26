export class TableSelection {
  static selectedClass = 'selected'
  static currentClass = 'current'

  constructor() {
    this.group = [];
    this.$current = null;
  }

  select($el) {
    this.clearAll();
    this.group.push($el);
    this.$current = $el;
    this.$current.addClass(
        TableSelection.currentClass,
        TableSelection.selectedClass
    );
    this.$current.focus();
  }

  selectGroup($cells = [], $current) {
    this.clearAll();
    this.select($current);
    this.group = $cells;
    this.group.forEach(($el) => $el.addClass(TableSelection.selectedClass));
  }

  clearGroup() {
    this.group.forEach(($el) => $el.removeClass(TableSelection.selectedClass));
    this.group = [];
  }

  clearCurrent() {
    if (this.$current) {
      this.$current.removeClass(TableSelection.currentClass);
    }
  }

  clearAll() {
    this.clearCurrent();
    this.clearGroup();
  }
}
