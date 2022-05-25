export class TableSelection {
  static selectedClass = 'selected'

  constructor() {
    this.group = [];
  }

  select($el) {
    this.clearGroup();
    this.group.push($el);
    $el.addClass(TableSelection.selectedClass);
  }

  clearGroup() {
    this.group.forEach(($el) => $el.removeClass(TableSelection.selectedClass));
    this.group = [];
  }
}
